import { RouterProvider, createMemoryRouter } from 'react-router';
import { getRoutes } from '../../router/routes';
import { APIContextProvider } from '../../api';
import { ReactNode } from 'react';
import { replaceRouteWithChildren } from './set-children-to-route';

export type RealDataWrapperProps = {
  /** @important the path to render */
  path?: string;
  children?: ReactNode;
};
export function RealDataWrapper(props: RealDataWrapperProps) {
  const routes = getRoutes();
  if (props.children && props.path) {
    replaceRouteWithChildren(routes, props.path, props.children);
  }
  const router = createMemoryRouter(routes, { initialEntries: [props.path || '/'] });
  return (
    <APIContextProvider>
      <RouterProvider router={router} />
    </APIContextProvider>
  );
}
