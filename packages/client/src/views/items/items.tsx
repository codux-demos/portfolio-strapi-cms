import styles from './items.module.scss';
import { apiHooks } from '../../api';
import { Link } from 'react-router-dom';

export interface ItemsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Items = ({ className }: ItemsProps) => {
  const { data: items } = apiHooks.useItems();

  return (
    <div className={`${styles.root} ${className}`}>
      {items?.data?.map((it) => (
        <Link key={it.id} to={`item/${it.id}`}>
          <h3>{it.attributes.Title}</h3>
        </Link>
      ))}
    </div>
  );
};
