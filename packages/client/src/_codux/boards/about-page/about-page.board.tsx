import { createBoard } from '@wixc3/react-board';
import { RealDataRealRoutes } from '../../board-wrappers/real-data-real-routes';
import { ROUTES } from '../../../router/config';

export default createBoard({
  name: 'About Page',
  Board: () => <RealDataRealRoutes path={ROUTES.about.to()} />,
});
