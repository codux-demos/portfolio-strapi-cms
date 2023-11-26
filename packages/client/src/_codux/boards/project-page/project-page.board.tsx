import { createBoard } from '@wixc3/react-board';
import { FakeDataRealRoutes } from '../../board-wrappers/fake-data-real-routes';
import { ProjectPage } from '../../../views/project-page/project-page';
import { ROUTES } from '../../../router/config';

export default createBoard({
  name: 'Project Page',
  Board: () => (
    <FakeDataRealRoutes path={ROUTES.project.to(3)}>
      <ProjectPage />
    </FakeDataRealRoutes>
  ),
  isSnippet: false,
});
