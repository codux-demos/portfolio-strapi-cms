import styles from './home-page.module.scss';
import { ProjectsGallery } from '../../components/projects-gallery/projects-gallery';
import * as theme from '../../styles/theme.module.scss';

export interface HomePageProps {
  className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <h3 className={`${styles.rectangle} ${styles.text}`}>some static description of my portfolio</h3>
      <div className={`${styles.rectangle} ${styles.img}`}></div>
      <div className={styles.logoWrapper}>
        <h1 className={styles.logo}>NAME PORT</h1>
      </div>

      <ProjectsGallery className={styles.gallery} headerHeight={theme.headerHeight} />
    </div>
  );
};
