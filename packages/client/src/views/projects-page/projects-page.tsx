import styles from './projects-page.module.scss';
import { apiHooks } from '../../api';
import { Link } from 'react-router-dom';

export interface ItemsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectsPage = ({ className }: ItemsProps) => {
  const { data: items } = apiHooks.useProjects();

  return (
    <div className={`${styles.root} ${className}`}>
      {items?.data.map((it) => (
        <Link key={it.id} to={it.id.toString()}>
          <h3>{it.attributes.title}</h3>
        </Link>
      ))}
    </div>
  );
};
