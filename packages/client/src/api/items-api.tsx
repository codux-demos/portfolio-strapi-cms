import { createContext, useMemo } from 'react';
import { StrapiConnection } from './strapi-connection';
import { Connection } from './types';
import { APIResponse, APIResponseCollection } from './strapi-types';

export function createApi(connection: Connection) {
  return {
    getProject: (id: number) =>
      connection.sendGetRequest<APIResponse<'api::project.project'>>(['projects', id.toString()]),
    getProjects: () => connection.sendGetRequest<APIResponseCollection<'api::project.project'>>(['projects']),
    getProjectItemsByProject: (projectId: number) =>
      connection.sendGetRequest<APIResponseCollection<'api::project-item.project-item'>>(['project-items'], {
        'filters[project]': projectId.toString(),
      }),
  };
}

export type API = ReturnType<typeof createApi>;

export const APIContext = createContext<API>({} as API);

export function APIContextProvider(props: { children: React.ReactNode }) {
  const api = useMemo(() => {
    const connection = new StrapiConnection();
    return createApi(connection);
  }, []);
  return <APIContext.Provider value={api}>{props.children}</APIContext.Provider>;
}
