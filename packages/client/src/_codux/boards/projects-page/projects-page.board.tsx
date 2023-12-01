import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../board-wrappers/page-wrapper';
import { ProjectsPage } from '../../../views/projects-page/projects-page';
import { ROUTES } from '../../../router/config';

export default createBoard({
  name: 'Projects Page',
  Board: () => (
    <PageWrapper
      path={ROUTES.projects.to()}
      settings={{
        numberOfItems: 4,
      }}
    >
      <ProjectsPage />
    </PageWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasWidth: 1046,
  },
});
