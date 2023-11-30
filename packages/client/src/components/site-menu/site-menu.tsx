import { Link, useMatch } from 'react-router-dom';
import styles from './site-menu.module.scss';
import * as RadixMenu from '@radix-ui/react-navigation-menu';
import { ROUTES } from '../../router/config';
import { apiHooks } from '../../api';
import { offset, useFloating } from '@floating-ui/react-dom';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { shift } from '@floating-ui/core';

export interface SiteMenuProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteMenu = () => {
  const { data: projects, isLoading } = apiHooks.useProjects();

  return (
    <RadixMenu.Root className={styles.root}>
      <RadixMenu.List className={styles.topMenu}>
        <MenuItem to={ROUTES.projects.to()} text="Home" />
        <MenuItem to={ROUTES.about.to()} text="About" />
        <RadixMenu.Item>
          <FloatingContentWithTrigger text="Projects">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <RadixMenu.List className={styles.sub}>
                {projects?.data.map((project) => (
                  <MenuItem key={project.id} to={ROUTES.project.to(project.id)} text={project.attributes.title} />
                ))}
              </RadixMenu.List>
            )}
          </FloatingContentWithTrigger>
        </RadixMenu.Item>
      </RadixMenu.List>
    </RadixMenu.Root>
  );
};

function MenuItem(props: { text: string; to: string }) {
  const match = useMatch(props.to);
  const isActive = !!match;

  return (
    <RadixMenu.Item>
      <RadixMenu.Link active={isActive} asChild>
        <Link to={props.to} className={`${styles.Link} ${isActive ? styles.active : ''}`}>
          <span>{props.text}</span>
        </Link>
      </RadixMenu.Link>
    </RadixMenu.Item>
  );
}

/**
 * This component allows for the sub menus to render as floating elements (without affecting the DOM around it).
 *
 * Also we are portalling the content of the menu to the body. which will append it as the last child of the body
 * hence avoiding the z-index issue.
 * If you have more complex floating elements in your project I advise installing `@floating-ui/react`
 * (not just `@floating-ui/react-dom`) and using [`FloatingPortal`](https://floating-ui.com/docs/FloatingPortal)
 *
 * @param props
 * @property children - the content of the sub menu, normally `RadixMenu.List`
 * @property text - the text on the trigger button
 * @returns the sub menu wrapped with a trigger button and floating css
 */
function FloatingContentWithTrigger(props: { children: ReactNode; text: string }) {
  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(10), shift()],
    open: true,
  });

  return (
    <>
      <RadixMenu.Trigger ref={refs.setReference} className={styles.Link}>
        {props.text}
      </RadixMenu.Trigger>
      {createPortal(
        <RadixMenu.Content ref={refs.setFloating} style={{ ...floatingStyles }} className={styles.content}>
          {props.children}
        </RadixMenu.Content>,
        document.body,
      )}
    </>
  );
}
