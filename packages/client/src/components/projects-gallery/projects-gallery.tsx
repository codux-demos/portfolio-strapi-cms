import { useProjects } from '../../api/api-hooks';
import styles from './projects-gallery.module.scss';
import { getImageUrl } from '../../api/strapi-connection';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/config';

export interface ProjectsGalleryProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectsGallery = ({ className }: ProjectsGalleryProps) => {
  const { data: projects } = useProjects();
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.root} ${className}`} ref={rootRef}>
      {projects?.data.map((project, index) => [
        <Link
          to={ROUTES.project.to(project.id)}
          key={`link_${project.id}`}
          className={styles.box}
          style={{ top: index * 20, height: 20 }}
        >
          {project.attributes.title}
        </Link>,
        <img
          key={`img_${project.id}`}
          src={getImageUrl(project.attributes.coverImage)}
          style={{ top: (index + 1) * 20 }}
        />,
      ])}
    </div>
  );
};
