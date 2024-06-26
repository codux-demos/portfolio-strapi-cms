import { SiteMenu } from '../../../../components/site-menu/site-menu';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
  name: 'Menu Closed',
  Board: () => (
    <ComponentWrapper settings={{}}>
      <ContentSlot>
        <SiteMenu />
      </ContentSlot>
    </ComponentWrapper>
  ),
  isSnippet: true,
  environmentProps: {
    canvasMargin: { right: 0, left: 0, top: 0, bottom: 0 },
  },
});
