import { createBoard } from '@wixc3/react-board';
import { RealDataWrapper } from '../../board-wrappers/real-data-wrapper';

export default createBoard({
  name: 'App',
  Board: () => <RealDataWrapper />,
  environmentProps: {
    canvasWidth: 1024,
  },
});
