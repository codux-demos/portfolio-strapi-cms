import { Navigate, RouteObject } from 'react-router-dom';
import { SiteWrapper } from '../views/site-wrapper/site-wrapper';
import { ProjectsPage } from '../views/projects-page/projects-page';
import { ProjectPage } from '../views/project-page/project-page';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <SiteWrapper />,
    children: [
      { index: true, element: <Navigate to="projects" /> },
      { path: 'projects', index: true, element: <ProjectsPage /> },
      { path: 'projects/:id', element: <ProjectPage /> },
    ],
  },
];
