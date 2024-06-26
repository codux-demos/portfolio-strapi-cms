import { ProjectsGallery } from '../../../../components/projects-gallery/projects-gallery';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
  name: 'Projects Gallery Many Items ',
  Board: () => (
    <ComponentWrapper
      settings={{
        numberOfItems: 30,
      }}
    >
      <ContentSlot>
        <ProjectsGallery />
      </ContentSlot>
    </ComponentWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasMargin: { right: 0, bottom: 0, left: 0 },
  },
});
