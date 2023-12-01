import { apiHooks } from '../../api';
import { getImageUrl } from '../../api/strapi-connection';
import styles from './about-page.module.scss';
import '@portfolio/client/src/styles/util-classes.scss';
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
                <h3 className={styles.title}>{aboutItem.data.attributes.title}</h3>
                <h5 className={styles.sub}>{aboutItem.data.attributes.subTitle}</h5>
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
