import { NavLink, useMatch } from 'react-router-dom';
import styles from './site-menu.module.scss';
import * as RadixMenu from '@radix-ui/react-navigation-menu';
import { ROUTES } from '../../router/config';
import { apiHooks } from '../../api';
import { autoPlacement, offset, useFloating } from '@floating-ui/react-dom';
import { ReactNode } from 'react';

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
        <MenuItem to={'/to-nowhere'} text="Other" />
        <RadixMenu.Item>
          <FloatingContentWithTrigger text="Projects">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <RadixMenu.List>
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
    <RadixMenu.Item className={isActive ? styles.active : ''}>
      <RadixMenu.Link active={isActive} asChild>
        <NavLink to={props.to}>{props.text}</NavLink>
      </RadixMenu.Link>
    </RadixMenu.Item>
  );
}

function FloatingContentWithTrigger(props: { children: ReactNode; text: string }) {
  const { refs, floatingStyles } = useFloating({
    placement: 'bottom',
    middleware: [
      offset(10),
      autoPlacement({
        allowedPlacements: ['bottom', 'bottom-end', 'bottom-start'],
      }),
    ],
  });
  return (
    <>
      <RadixMenu.Trigger ref={refs.setReference}>{props.text}</RadixMenu.Trigger>
      <RadixMenu.Content ref={refs.setFloating} style={floatingStyles} className={styles.content}>
        {props.children}
      </RadixMenu.Content>
    </>
  );
}
