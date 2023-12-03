import styles from './home-page.module.scss';
import { ProjectsGallery } from '../../components/projects-gallery/projects-gallery';
import * as theme from '../../styles/theme.module.scss';
import cx from 'classnames';
import { motion } from 'framer-motion';
export interface HomePageProps {
  className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 8,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className={cx(styles.root, className)}>
      <h3 className={cx(styles.rectangle, styles.text)}>some static description of my portfolio</h3>
      <div className={cx(styles.rectangle, styles.img)}></div>
      <div className={styles.logoWrapper}>
        <h1 className={styles.logo}>NAME PORT</h1>
      </div>
      <div className={styles.marquee}>
        <motion.div className={styles.marqueeContent} variants={marqueeVariants} animate="animate">
          {Array(10).fill('Animated backwards moving text block coming. ')}
        </motion.div>
      </div>
      <ProjectsGallery className={styles.gallery} headerHeight={theme.headerHeight} />
    </div>
  );
};
