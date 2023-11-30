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
            <div className={`${styles.rectangle} ${styles.text}`}>
                <h3 className={styles.title}>some static description of my portfolio</h3>
            </div>
            <div className={`${styles.rectangle} ${styles.img}`}></div>

            <ProjectsGallery className={styles.gallery} headerHeight={theme.headerHeight} />
        </div>
    );
};
