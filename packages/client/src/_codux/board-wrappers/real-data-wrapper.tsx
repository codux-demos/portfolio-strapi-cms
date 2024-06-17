import { RouterProvider, createMemoryRouter } from 'react-router';
import { getRoutes } from '../../router/routes';
import { APIContextProvider } from '../../api';

/**
 *
 * @param {{}} props
 * @param {string} [props.path = /] - the path to render
 * @returns
 */
export function RealDataWrapper(props: { path: string }) {
  const router = createMemoryRouter(getRoutes(), { initialEntries: [props.path || '/'] });
  return (
    <APIContextProvider>
      <RouterProvider router={router} />
    </APIContextProvider>
  );
}
