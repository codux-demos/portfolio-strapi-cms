import { ContentSlot, createBoard } from '@wixc3/react-board';
import { RealDataWrapper } from '/src/_codux/board-wrappers/real-data-wrapper';

export default createBoard({
  name: 'App',
  Board: () => (
    //in practice PageWrapperRealData with a path will render the correct page, but it is less convenient to use in a board
    <RealDataWrapper>
      <ContentSlot />
    </RealDataWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasMargin: { right: 0, bottom: 0, left: 0 },
  },
});
