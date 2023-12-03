import styles from './footer.module.scss';
import cx from 'classnames';

export interface FooterProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
  return (
    <div id="footer" className={cx(styles.root, className)}>
      <a href="mailto:info@mySite.com">info@mySite.com</a>
      <a href="/">Instagram</a>
      <a href="/">Facebook</a>
      <a href="/">Pinterest</a>
      <span>123-456-7890</span>
      <span className={styles.copyright}>© 2020 Career Karma and some more</span>
    </div>
  );
};
