import { createBoard } from '@wixc3/react-board';
import { FakeDataRealRoutes } from '../../board-wrappers/fake-data-real-routes';
import { Items } from '../../../views/items/items';

export default createBoard({
  name: 'Items',
  Board: () => (
    <FakeDataRealRoutes
      path="/"
      settings={{
        numberOfItems: 30,
      }}
    >
      <Items />
    </FakeDataRealRoutes>
  ),
  isSnippet: false,
  environmentProps: {
    canvasWidth: 800,
  },
});
