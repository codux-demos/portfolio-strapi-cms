import { createBoard } from '@wixc3/react-board';
import { ItemsPage } from '../../../views/items-page/items-page';
import { FakeDataFakeRoutes } from '../../board-wrappers/fake-data-fake-routes';
import { ROUTES } from '../../../router/config';

export default createBoard({
    name: 'ItemsPage',
    Board: () => (
        <FakeDataFakeRoutes path={ROUTES.project.to(1)} patters={ROUTES.project.path}>
            <ItemsPage />
        </FakeDataFakeRoutes>
    ),
    isSnippet: false,
    environmentProps: {
        windowWidth: 1024,
        canvasWidth: 1014
    }
});
