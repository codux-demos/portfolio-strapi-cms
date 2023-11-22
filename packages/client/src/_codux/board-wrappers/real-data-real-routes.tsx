import { RouterProvider, createMemoryRouter } from 'react-router';
import { routes } from '../../router/routes';
import { APIContextProvider } from '../../api';

export function RealDataRealRoutes(props: { path?: string }) {
  const router = createMemoryRouter(routes, { initialEntries: [props.path || '/'] });
  return (
    <APIContextProvider>
      <RouterProvider router={router} />
    </APIContextProvider>
  );
}
