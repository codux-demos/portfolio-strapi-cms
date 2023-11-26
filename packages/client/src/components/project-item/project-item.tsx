import { StrapiProjectItem } from '../../api';
import { getImageUrl } from '../../api/strapi-connection';
import styles from './project-item.module.scss';

export interface ProjectItemProps {
  className?: string;
  projectItemAttr: StrapiProjectItem['attributes'];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectItem = ({ className, projectItemAttr }: ProjectItemProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <h3>{projectItemAttr.title}</h3>
      <img src={getImageUrl(projectItemAttr.image)} alt="" />
      <p>{projectItemAttr.description}</p>
    </div>
  );
};
