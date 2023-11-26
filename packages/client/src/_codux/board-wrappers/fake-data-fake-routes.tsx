import { ReactNode } from 'react';
import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { FakeDataSettings } from '../../api/fake/fake-data';

export function FakeDataFakeRoutes(props: { children: ReactNode; settings?: FakeDataSettings; path?: string }) {
  const router = createMemoryRouter([{ path: props.path || '/', element: props.children }], {
    initialEntries: [props.path || '/'],
  });
  return (
    <FakeAPIContextProvider settings={props.settings}>
      <RouterProvider router={router} />
    </FakeAPIContextProvider>
  );
}
