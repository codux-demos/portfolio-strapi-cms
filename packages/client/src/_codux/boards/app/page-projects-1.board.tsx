import { createBoard } from '@wixc3/react-board';
import { RealDataWrapper } from '../../board-wrappers/real-data-wrapper';

export default createBoard({
    name: 'Page-Project CMS',
    Board: () => <RealDataWrapper path="/projects/1" />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1024,
    },
});
