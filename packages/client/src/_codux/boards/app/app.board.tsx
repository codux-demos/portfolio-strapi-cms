import { createBoard } from '@wixc3/react-board';
import { RealDataWrapper } from '../../board-wrappers/real-data-wrapper';

export default createBoard({
  name: 'App With Strapi Data',
  Board: () => <RealDataWrapper />,
  environmentProps: {
    windowWidth: 1024,
  },
});
