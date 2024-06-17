import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { getRoutes } from '../../router/routes';
import { ReactNode } from 'react';
import { FakeDataSettings } from '../../api/fake/fake-data';
import { replaceRouteWithChildren } from './set-children-to-route';

/**
 *
 * @param {{}} props
 * @param {string} props.path - the path (route) of the page
 * @param {ReactNode} [props.children] -the component to render. we pass this only because codux tags boards by the components
 * preset in the board (for now). in practice this is redundant.
 * @param {FakeDataSettings} [props.setting] - settings for the fake data
 * @returns {ReactNode}
 */
export function PageWrapper(props: { path: string; children?: ReactNode; settings?: FakeDataSettings }) {
  const routes = getRoutes();
  if (props.children) {
    replaceRouteWithChildren(routes, props.path, props.children);
  }

  const router = createMemoryRouter(getRoutes(), {
    initialEntries: [props.path || '/'],
  });
  return (
    <FakeAPIContextProvider settings={props.settings}>
      <RouterProvider router={router} />
    </FakeAPIContextProvider>
  );
}
