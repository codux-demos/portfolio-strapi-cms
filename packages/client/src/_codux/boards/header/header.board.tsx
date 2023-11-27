import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import { FakeDataFakeRoutes } from '../../board-wrappers/fake-data-fake-routes';
import { ROUTES } from '../../../router/config';

export default createBoard({
    name: 'Header',
    Board: () => (
        <FakeDataFakeRoutes path={ROUTES.projects.to()} settings={{ numberOfItems: 0 }}>
            <Header />
        </FakeDataFakeRoutes>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
        windowWidth: 598
    }
});
