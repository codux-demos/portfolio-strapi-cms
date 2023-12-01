import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../../board-wrappers/page-wrapper';
import { HomePage } from '../../../../pages/home-page/home-page';
import { ROUTES } from '../../../../router/config';

export default createBoard({
  name: 'Home Page',
  Board: () => (
    <PageWrapper
      path={ROUTES.projects.to()}
      settings={{
        numberOfItems: 4,
      }}
    >
      <HomePage />
    </PageWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasWidth: 1046,
  },
});
