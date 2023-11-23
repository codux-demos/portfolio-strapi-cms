import { Link } from 'react-router-dom';
import { useProjects } from '../../api/api-hooks';
import styles from './projects-gallery.module.scss';
import { ROUTES } from '../../router/config';
import { getImageUrl } from '../../api/strapi-connection';

export interface ProjectsGalleryProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectsGallery = ({ className }: ProjectsGalleryProps) => {
  const { data: projects } = useProjects();
  return (
    <div className={`${styles.root} ${className}`}>
      {projects?.data.map((project) => (
        <Link to={ROUTES.project.to(project.id)} key={project.id}>
          <img src={getImageUrl(project.attributes.coverImage)} />
        </Link>
      ))}
    </div>
  );
};
