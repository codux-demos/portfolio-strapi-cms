import { apiHooks } from '../../api';
import { getImageUrl } from '../../api/strapi-connection';
import styles from './about-page.module.scss';
import Markdown from 'markdown-to-jsx';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutPage = () => {
  const { data: aboutItem } = apiHooks.useAbout();

  if (!aboutItem) return null;

  return (
    <>
      <div className={`${styles.rectangle} ${styles.text}`}>
        <div>
          <strong>Title:</strong>
          <span>{aboutItem.data.attributes.title}</span>
        </div>
        <div>
          <strong>Subtitle:</strong>
          <span>{aboutItem.data.attributes.subTitle}</span>
        </div>
        <div className="markdown">
          <Markdown>{aboutItem.data.attributes.richtext || ''}</Markdown>
        </div>
      </div>
      <div className={styles.rectangle}>
        {aboutItem.data.attributes.image && <img src={getImageUrl(aboutItem?.data.attributes.image)} />}
      </div>
    </>
  );
};
