import { Outlet } from 'react-router';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export function SiteWrapper() {
    return (
        <div><Header /><Outlet />
            <Footer />
        </div>
    );
}
