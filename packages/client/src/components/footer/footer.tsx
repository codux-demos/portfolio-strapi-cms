import { apiHooks } from '../../api';
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
  const { data } = apiHooks.useAbout();
  return (
    <div id="footer" className={cx(styles.root, className)}>
      <a href={`mailto:${data?.data.attributes.email}`}>{data?.data.attributes.email}</a>
      <a href={data?.data.attributes.instagram || '/'} target="_blank" rel="noreferrer">
        Instagram
      </a>
      <a href={data?.data.attributes.facebook || '/'} target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a href={data?.data.attributes.pinterest || '/'} target="_blank" rel="noreferrer">
        Pinterest
      </a>
      <span>{data?.data.attributes.phone}</span>
      <span className={styles.copyright}>© 2020 Career Karma and some more</span>
    </div>
  );
};
