import { Outlet } from 'react-router';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import SiteWrapper_module from './site-wrapper.module.scss';
import { ScrollRestoration, useLocation, matchRoutes } from 'react-router-dom';
import { ROUTES } from '../../router/config';
import { routes } from '../../router/routes';

const layouts = {
  [ROUTES.about.path]: SiteWrapper_module.full,
  [ROUTES.project.path]: SiteWrapper_module.belowHeader,
  [ROUTES.projects.path]: '',
};

export function SiteWrapper() {
  const ll = useLocation();
  const matchingRoutes = matchRoutes(routes, ll.pathname);
  const bestMatch = matchingRoutes?.[matchingRoutes?.length - 1];
  const path = bestMatch?.route.path;

  const layoutClass = path ? layouts[path] : '';

  return (
    <div className={`${SiteWrapper_module.root} ${layoutClass}`}>
      <ScrollRestoration />
      <div className={SiteWrapper_module.content}>
        <Outlet />
      </div>
      <Footer />
      <Header />
    </div>
  );
}
