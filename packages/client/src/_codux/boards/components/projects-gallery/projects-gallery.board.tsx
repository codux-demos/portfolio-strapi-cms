import { ProjectsGallery } from '../../../../components/projects-gallery/projects-gallery';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
  name: 'Projects Gallery',
  Board: () => (
    <ComponentWrapper settings={{}}>
      <ContentSlot>
        <ProjectsGallery />
      </ContentSlot>
    </ComponentWrapper>
  ),
  isSnippet: true,
  environmentProps: {
    canvasMargin: { right: 0, bottom: 0, left: 0 },
  },
});
