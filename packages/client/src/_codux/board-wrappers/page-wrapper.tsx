import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { getRoutes } from '../../router/routes';
import { ReactNode } from 'react';
import { FakeDataSettings } from '../../api/fake/fake-data';
import { replaceRouteWithChildren } from './set-children-to-route';

export type PageWrapperProps = {
  /** @important the path (route) of the page */
  path?: string;
  children?: ReactNode;
  /** @important  settings for the fake data */
  settings?: FakeDataSettings;
};

export function PageWrapper(props: PageWrapperProps) {
  const routes = getRoutes();
  if (props.children) {
    replaceRouteWithChildren(routes, props.path || '/', props.children);
  }

  const router = createMemoryRouter(routes, {
    initialEntries: [props.path || '/'],
  });
  return (
    <FakeAPIContextProvider settings={props.settings}>
      <RouterProvider router={router} />
    </FakeAPIContextProvider>
  );
}
