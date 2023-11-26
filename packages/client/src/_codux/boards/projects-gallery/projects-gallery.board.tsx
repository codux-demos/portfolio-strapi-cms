import { createBoard } from '@wixc3/react-board';
import { ProjectsGallery } from '../../../components/projects-gallery/projects-gallery';
import { FakeDataFakeRoutes } from '../../board-wrappers/fake-data-fake-routes';

export default createBoard({
    name: 'ProjectsGallery',
    Board: () => (
        <FakeDataFakeRoutes>
            <ProjectsGallery />
        </FakeDataFakeRoutes>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
        windowHeight: 470
    }
});
