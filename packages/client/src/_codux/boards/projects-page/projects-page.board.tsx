import { createBoard } from '@wixc3/react-board';
import { FakeDataRealRoutes } from '../../board-wrappers/fake-data-real-routes';
import { ProjectsPage } from '../../../views/projects-page/projects-page';
import { ROUTES } from '../../../router/config';

export default createBoard({
    name: 'Projects Page',
    Board: () => (
        <FakeDataRealRoutes
            path={ROUTES.projects.to()}
            settings={{
                numberOfItems: 4,
            }}
        >
            <ProjectsPage />
        </FakeDataRealRoutes>
    ),
    isSnippet: false,
    environmentProps: {
        canvasWidth: 1046,
    },
});
