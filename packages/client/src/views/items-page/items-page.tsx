import { useParams } from 'react-router-dom';
import styles from './items-page.module.scss';
import { RouteParams } from '../../router/config';
import { apiHooks } from '../../api';
import { ProjectItem } from '../../components/project-item/project-item';

export interface ItemsPageProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ItemsPage = ({ className }: ItemsPageProps) => {
  const { id: strId } = useParams<RouteParams['/projects/:id']>();
  const id = strId ? parseInt(strId) : -1;

  const { data } = apiHooks.useProject(id);
  const { data: projectItems } = apiHooks.useProjectItems(id);

  const [firstItem, ...restItems] = projectItems?.data || [];
  if (!firstItem) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`${styles.root} ${className}`}>
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
