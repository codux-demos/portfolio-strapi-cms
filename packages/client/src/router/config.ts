import { generatePath } from 'react-router-dom';

const PROJECTS = '/projects';
const PROJECT = `${PROJECTS}/:id`;

export const ROUTES = {
  projects: { path: PROJECTS, to: () => PROJECTS },
  project: { path: PROJECT, to: (projectId: number) => generatePath(PROJECT, { id: projectId.toString() }) },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
  [PROJECT]: { id: string };
};
