import { createBoard } from '@wixc3/react-board';
import { ProjectsGallery } from '../../../components/projects-gallery/projects-gallery';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
  name: 'ProjectsGallery',
  Board: () => (
    <ComponentWrapper>
      <ProjectsGallery />
    </ComponentWrapper>
  ),
  isSnippet: true,
  environmentProps: {
    canvasWidth: 800,
    windowHeight: 470,
  },
});
