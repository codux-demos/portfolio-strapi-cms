import { Outlet } from 'react-router';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import SiteWrapper_module from './site-wrapper.module.scss';
import { ScrollRestoration } from 'react-router-dom';

export function SiteWrapper() {
  return (
    <div className={SiteWrapper_module.root}>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
