import { useParams } from 'react-router-dom';
import styles from './project-page.module.scss';
import { RouteParams } from '../../router/config';
import { apiHooks } from '../../api';
import { ProjectItem } from '../../components/project-item/project-item';
import cx from 'classnames';
import Markdown from 'markdown-to-jsx';
import '@portfolio/client/src/styles/util-classes.scss';

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
    <div id="top" className={cx(styles.root, className)}>
      <div className={styles.gallery}>
        <div key="first" className={styles.galleryItem}>
          <ProjectItem
            title={firstItem.attributes.title}
            description={firstItem.attributes.description}
            image={firstItem.attributes.image}
          />
        </div>
        <div key="desc" className={styles.galleryItem} style={{ maxWidth: '100%' }}>
          <h3 className={styles.title}>{data?.attributes.title}</h3>
          <p>{data?.attributes.description}</p>
        </div>
        {restItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <ProjectItem
              title={item.attributes.title}
              description={item.attributes.description}
              image={item.attributes.image}
            />
          </div>
        ))}
      </div>
      <div className={cx('markdown', styles.details)}>
        <Markdown>{data?.attributes.details || ''}</Markdown>
      </div>
      <div>
        <a href="#top" className={styles.backToTop}>
          Back to top
        </a>
      </div>
    </div>
  );
};
