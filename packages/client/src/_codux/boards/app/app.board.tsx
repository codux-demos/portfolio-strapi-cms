import { createBoard } from '@wixc3/react-board';
import { RealDataRealRoutes } from '../../board-wrappers/real-data-real-routes';

export default createBoard({
  name: 'App',
  Board: () => <RealDataRealRoutes />,
  environmentProps: {
    canvasWidth: 1024,
  },
});
