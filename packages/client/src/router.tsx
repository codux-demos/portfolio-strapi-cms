import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './views/site-wrapper/site-wrapper';
import { Items } from './views/items/items';
import { Item } from './views/item/item';
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <SiteWrapper />,
    children: [
      { path: '/', element: <Items /> },
      { path: 'item/:id', element: <Item /> },
    ],
  },
];
