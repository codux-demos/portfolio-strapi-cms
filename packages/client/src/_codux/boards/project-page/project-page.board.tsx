import { createBoard } from '@wixc3/react-board';
import { FakeDataRealRoutes } from '../../board-wrappers/fake-data-real-routes';
import { ProjectPage } from '../../../views/project-page/project-page';

export default createBoard({
  name: 'Project Page',
  Board: () => (
    <FakeDataRealRoutes path="/project/3">
      <ProjectPage />
    </FakeDataRealRoutes>
  ),
  isSnippet: true,
});
