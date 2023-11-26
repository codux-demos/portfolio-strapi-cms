import { createBoard } from '@wixc3/react-board';
import { ProjectsGallery } from '../../../components/projects-gallery/projects-gallery';
import { FakeDataFakeRoutes } from '../../board-wrappers/fake-data-fake-routes';

export default createBoard({
    name: 'Projects Gallery few items',
    Board: () => (
        <FakeDataFakeRoutes settings={{
            numberOfItems: 3
        }}>
            <ProjectsGallery />
        </FakeDataFakeRoutes>
    ),
    isSnippet: false,
    environmentProps: {
        canvasWidth: 800,
        windowHeight: 470
    }
});
