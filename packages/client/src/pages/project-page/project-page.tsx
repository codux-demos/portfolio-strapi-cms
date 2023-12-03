import { useParams } from 'react-router-dom';
import styles from './project-page.module.scss';
import { RouteParams } from '../../router/config';
import { apiHooks } from '../../api';
import { ProjectItem } from '../../components/project-item/project-item';
import cx from 'classnames'

export interface ProjectPage {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectPage = ({ className }: ProjectPage) => {
  const { id: strId } = useParams<RouteParams['/projects/:id']>();
  const id = strId ? parseInt(strId) : -1;

  const { data } = apiHooks.useProject(id);
  const { data: projectItems } = apiHooks.useProjectItems(id);

  const [firstItem, ...restItems] = projectItems?.data || [];
  if (!projectItems) {
    return <div>Loading...</div>;
  }
  if (!firstItem) {
    return <div>there are no items in this project</div>;
  }
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles.gallery}>
        <div key="first" className={styles.galleryItem}>
          <ProjectItem projectItemAttr={firstItem?.attributes} />
        </div>
        <div key="desc" className={styles.galleryItem} style={{ maxWidth: '100%' }}>
          <h3 className={styles.title}>{data?.attributes.title}</h3>
          <p>{data?.attributes.description}</p>
        </div>
        {restItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <ProjectItem projectItemAttr={item.attributes} />
          </div>
        ))}
      </div>
    </div>
  );
};
