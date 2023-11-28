import { apiHooks } from '../../api';
import { getImageUrl } from '../../api/strapi-connection';
import styles from './about-page.module.scss';
import Markdown from 'markdown-to-jsx';

export interface AboutPageProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutPage = ({ className }: AboutPageProps) => {
  const { data: aboutItem } = apiHooks.useAbout();

  if (!aboutItem) return null;

  return (
    <div className={`${styles.root} ${className}`}>
      <div>
        <strong>Title:</strong>
        <span>{aboutItem.data.attributes.title}</span>
      </div>
      <div>
        <strong>Subtitle:</strong>
        <span>{aboutItem.data.attributes.subTitle}</span>
      </div>
      <div>
        <strong>Image:</strong>
        {aboutItem.data.attributes.image && <img src={getImageUrl(aboutItem?.data.attributes.image)} />}
      </div>
      <div className="markdown">
        <Markdown>{aboutItem.data.attributes.text || ''}</Markdown>
      </div>
    </div>
  );
};
