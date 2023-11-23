import { apiHooks } from '../../api';
import styles from './about-page.module.scss';

export interface AboutPageProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutPage = ({ className }: AboutPageProps) => {
  const { data } = apiHooks.useAbout();
  console.log('👵🏼🌚 # data:', data);
  return <div className={`${styles.root} ${className}`}>AboutPage</div>;
};
