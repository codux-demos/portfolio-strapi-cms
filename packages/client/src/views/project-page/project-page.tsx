import styles from './project-page.module.scss';
import { apiHooks } from '../../api';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { ProjectItem } from '../../components/project-item/project-item';

export interface ItemProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectPage = ({ className }: ItemProps) => {
  const { id: strId } = useParams<RouteParams['/projects/:id']>();
  const id = strId ? parseInt(strId) : -1;
  const { data } = apiHooks.useProject(id);
  const { data: projectItems } = apiHooks.useProjectItems(id);

  return (
    <div className={`${styles.root} ${className}`}>
      <h3>{data?.attributes.title}</h3>
      <p className={styles.desc}>{data?.attributes.description}</p>
      <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
      {projectItems?.data.map((item) => <ProjectItem projectItemAttr={item.attributes} key={item.id} />)}
    </div>
  );
};
