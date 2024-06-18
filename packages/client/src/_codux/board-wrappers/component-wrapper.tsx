import { ReactNode } from 'react';
import { FakeAPIContextProvider } from '../../api/fake/fake-provider';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { FakeDataSettings } from '../../api/fake/fake-data';

export type ComponentWrapperProps = {
  children: ReactNode;
  /** @important settings for the fake data */
  settings?: FakeDataSettings;
};

export function ComponentWrapper(props: ComponentWrapperProps) {
  const router = createMemoryRouter([
    {
      path: '*',
      element: props.children,
    },
  ]);
  return (
    <FakeAPIContextProvider settings={props.settings}>
      <RouterProvider router={router} />
    </FakeAPIContextProvider>
  );
}
