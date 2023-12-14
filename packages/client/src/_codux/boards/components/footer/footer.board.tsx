import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';
import { Footer } from '../../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => (
        <ComponentWrapper>
            <Footer />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 700,
    },
});
