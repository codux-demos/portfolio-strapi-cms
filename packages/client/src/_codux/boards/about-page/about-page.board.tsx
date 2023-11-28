import { createBoard } from '@wixc3/react-board';
import { ROUTES } from '../../../router/config';
import { AboutPage } from '../../../views/about-page/about-page';
import { FakeDataRealRoutes } from '../../board-wrappers/fake-data-real-routes';

export default createBoard({
  name: 'About Page',
  Board: () => (
    <FakeDataRealRoutes path={ROUTES.about.to()}>
      <AboutPage />
    </FakeDataRealRoutes>
  ),
});
