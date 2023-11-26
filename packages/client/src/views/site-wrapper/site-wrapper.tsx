import { Outlet } from 'react-router';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import SiteWrapper_module from './site-wrapper.module.scss';

export function SiteWrapper() {
    return (
        <div className={SiteWrapper_module.root}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
