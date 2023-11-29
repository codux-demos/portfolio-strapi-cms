import { Navigate, RouteObject } from 'react-router-dom';
import { SiteWrapper } from '../views/site-wrapper/site-wrapper';
import { ProjectsPage } from '../views/projects-page/projects-page';
import { AboutPage } from '../views/about-page/about-page';
import { ROUTES } from './config';
import { ItemsPage } from '../views/items-page/items-page';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <SiteWrapper />,
    children: [
      { index: true, element: <Navigate to={ROUTES.projects.to()} /> },
      { path: ROUTES.projects.path, index: true, element: <ProjectsPage /> },
      { path: ROUTES.project.path, element: <ItemsPage /> },
      { path: ROUTES.about.path, element: <AboutPage /> },
    ],
  },
];
