import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter, matchRoutes } from 'react-router';
import { routes } from '../../router/routes';
import { ReactNode } from 'react';
import { FakeDataSettings } from '../../api/fake/fake-data';

export function FakeDataRealRoutes(props: { path?: string; children: ReactNode; settings?: FakeDataSettings }) {
  const matchingRoutes = matchRoutes(routes, props.path || '/');
  if (!matchingRoutes) {
    routes.push({ path: props.path || '/', element: props.children });
  } else {
    const bestMatchingRoute = matchingRoutes[matchingRoutes.length - 1];
    bestMatchingRoute.route.element = props.children;
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
