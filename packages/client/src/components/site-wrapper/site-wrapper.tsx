import { Outlet } from 'react-router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import SiteWrapper_module from './site-wrapper.module.scss';
import { ScrollRestoration } from 'react-router-dom';

export function SiteWrapper() {
  return (
    <div className={SiteWrapper_module.root}>
      <ScrollRestoration />
      <Header className={SiteWrapper_module.header} />
      <div className={SiteWrapper_module.page}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
