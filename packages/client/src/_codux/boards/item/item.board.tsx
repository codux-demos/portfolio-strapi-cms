import { createBoard } from '@wixc3/react-board';
import { FakeDataRealRoutes } from '../../board-wrappers/fake-data-real-routes';
import { Item } from '../../../views/item/item';

export default createBoard({
  name: 'Item',
  Board: () => (
    <FakeDataRealRoutes path="/item/3">
      <Item />
    </FakeDataRealRoutes>
  ),
  isSnippet: true,
});
