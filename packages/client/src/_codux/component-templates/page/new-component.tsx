import styles from './new-component.module.scss';
import cx from 'classnames';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = () => {
  return <div className={cx(styles.root, 'page')}>NewComponent</div>;
};
