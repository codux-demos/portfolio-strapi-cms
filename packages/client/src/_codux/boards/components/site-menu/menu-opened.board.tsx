import { SiteMenu } from '../../../../components/site-menu/site-menu';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
  name: 'Menu Opened',
  Board: () => (
    <ComponentWrapper settings={{}}>
      <ContentSlot>
        <SiteMenu isOpen />
      </ContentSlot>
    </ComponentWrapper>
  ),
  isSnippet: true,
  environmentProps: {
    canvasMargin: { right: 0, left: 0, top: 0 },
  },
});
