import styles from './header.module.scss';
import { SiteMenu } from '../site-menu/site-menu';
import { useScroll, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import * as theme from '../../styles/theme.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const { scrollY } = useScroll();
    const headerHeight = useMotionValue(parseInt(theme.headerHeight));
    const opacity = useTransform(() => scrollY.get() / headerHeight.get());
    const bg = useMotionTemplate`rgba(255, 255, 255, ${opacity})`;

    return (
        <motion.div className={`${styles.root} ${className}`} style={{ background: bg }}>
            <div className={styles.leftContainer}>
                <span className={styles.logo}>NAME PORT</span>
                <SiteMenu />
            </div>
            <a href="#footer" className={styles.contactLink}>Contant</a>
        </motion.div>
    );
};
