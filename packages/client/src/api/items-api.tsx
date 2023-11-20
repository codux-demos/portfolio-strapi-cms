import { createContext, useMemo } from 'react';
import { StrapiConnection } from './strapi-connection';
import { Connection, StrapiItem, Todo } from './types';

export function createApi(connection: Connection) {
  return {
    getItems: () => connection.sendGetRequest<StrapiItem<Todo>[]>(['todos']),
    getItem: (id: number) => connection.sendGetRequest<StrapiItem<Todo>>(['todos', id.toString()]),
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
