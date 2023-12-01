import { createBoard } from '@wixc3/react-board';
import { ProjectPage } from '../../../pages/project-page/project-page';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';
import { ROUTES } from '../../../router/config';

export default createBoard({
  name: 'Project Page',
  Board: () => (
    <ComponentWrapper path={ROUTES.project.to(1)} patters={ROUTES.project.path}>
      <ProjectPage />
    </ComponentWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    windowWidth: 1024,
  },
});
