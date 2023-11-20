import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter, matchRoutes } from 'react-router';
import { routes } from '../../router';
import { ReactNode } from 'react';

export function FakeDataRealRoutes(props: { path?: string; children: ReactNode }) {
  const matchingRoutes = matchRoutes(routes, props.path || '/');
  if (!matchingRoutes) {
    routes.push({ path: props.path || '/', element: props.children });
  } else {
    const bestMatchingRoute = matchingRoutes[matchingRoutes.length - 1];
    bestMatchingRoute.route.element = props.children;
  }

  const router = createMemoryRouter(routes, { initialEntries: [props.path || '/'] });
  return (
    <FakeAPIContextProvider>
      <RouterProvider router={router} />
    </FakeAPIContextProvider>
  );
}
