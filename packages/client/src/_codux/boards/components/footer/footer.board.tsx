import { Footer } from '../../../../components/footer/footer';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
  name: 'Footer',
  Board: () => (
    <ComponentWrapper settings={{}}>
      <ContentSlot>
        <Footer />
      </ContentSlot>
    </ComponentWrapper>
  ),
  isSnippet: true,
  environmentProps: {
    canvasMargin: { right: 0, bottom: 0, left: 0 },
  },
});
