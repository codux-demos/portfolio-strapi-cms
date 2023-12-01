import { createBoard } from '@wixc3/react-board';
import { ItemsPage } from '../../../views/items-page/items-page';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';
import { ROUTES } from '../../../router/config';

export default createBoard({
  name: 'ItemsPage',
  Board: () => (
    <ComponentWrapper path={ROUTES.project.to(1)} patters={ROUTES.project.path}>
      <ItemsPage />
    </ComponentWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    windowWidth: 1024,
    canvasWidth: 1014,
  },
});
