import styles from './projects-page.module.scss';
import { ProjectsGallery } from '../../components/projects-gallery/projects-gallery';
import * as theme from '../../styles/theme.module.scss';

export interface ItemsProps {
  className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectsPage = ({ className }: ItemsProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <h3>some static description of my portfolio</h3>
      <ProjectsGallery headerHeight={theme.headerHeight} />
    </div>
  );
};
