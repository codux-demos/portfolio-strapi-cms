import { useMemo } from 'react';
import { APIContextProvider } from './api';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getRoutes } from './router/routes';

const routes = getRoutes();

function App() {
  const router = useMemo(() => createBrowserRouter(routes), []);
  return (
    <APIContextProvider>
      <RouterProvider router={router} />
    </APIContextProvider>
  );
}

export default App;
