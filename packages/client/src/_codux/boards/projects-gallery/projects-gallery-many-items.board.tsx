import { createBoard } from '@wixc3/react-board';
import { ProjectsGallery } from '../../../components/projects-gallery/projects-gallery';
import { FakeDataFakeRoutes } from '../../board-wrappers/fake-data-fake-routes';

export default createBoard({
    name: 'Projects Gallery many items',
    Board: () => (
        <FakeDataFakeRoutes settings={{
            numberOfItems: 30
        }}>
            <ProjectsGallery />
        </FakeDataFakeRoutes>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
        windowHeight: 470
    }
});
