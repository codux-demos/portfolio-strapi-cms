import { StrapiProjectItem } from '../../api';
import { getImageUrl } from '../../api/strapi-connection';
import styles from './project-item.module.scss';
import { motion } from 'framer-motion';

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
    <motion.div
      className={`${styles.root} ${className}`}
      initial={{ opacity: 0.2, marginTop: 100 }}
      whileInView={{ opacity: 1, marginTop: 0, transition: { duration: 1 } }}
      viewport={{ once: true, margin: '20px' }}
    >
      <img
        src={getImageUrl(projectItemAttr.image)}
        alt=""
        style={{ minWidth: projectItemAttr.image.data.attributes.width }}
      />
      <h3 className={styles.itemTitle}>{projectItemAttr.title}</h3>
      <p className={styles.itemDesc}>{projectItemAttr.description}</p>
    </motion.div>
  );
};
