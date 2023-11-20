import styles from './item.module.scss';
import { apiHooks } from '../../api';
import { useParams } from 'react-router-dom';

export interface ItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Item = ({ className }: ItemProps) => {
    const { id: strId } = useParams<{ id: string }>();
    const id = strId ? parseInt(strId) : -1;
    const { data } = apiHooks.useItem(id);
    return (
        <div className={`${styles.root} ${className}`}>
            <h3>{data?.attributes.Title}</h3>
            <p className={styles.desc}>{data?.attributes.description}</p>
        </div>
    );
};
