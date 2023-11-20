import { ReactNode } from 'react';
import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter } from 'react-router';

export function FakeDataFakeRoutes(props: {children: ReactNode}) {
  const router = createMemoryRouter([{ path: '/', element: props.children }]);
  return (
    <FakeAPIContextProvider>
      <RouterProvider router={router} />
    </FakeAPIContextProvider>
  );
}
