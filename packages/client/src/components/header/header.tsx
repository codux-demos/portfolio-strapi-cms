import styles from './header.module.scss';
import { SiteMenu } from '../site-menu/site-menu';

export interface HeaderProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      Header Stuff
      <SiteMenu />
    </div>
  );
};
