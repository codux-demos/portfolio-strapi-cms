import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/config';
import styles from './header.module.scss';
import { SiteMenu } from '../site-menu/site-menu';

export interface HeaderProps {
  className?: string;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [styles['nav-link'], isActive ? styles.active : ''].join(' ');
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      Header Stuff
      <SiteMenu />
      <div>
        <NavLink to={ROUTES.projects.to()} end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/non-existant" end className={navLinkClass}>
          Other
        </NavLink>
      </div>
    </div>
  );
};
