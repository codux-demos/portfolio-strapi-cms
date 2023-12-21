import { createBoard } from '@wixc3/react-board';
import { RealDataWrapper } from '../../board-wrappers/real-data-wrapper';
import { ROUTES } from '../../../router/config';

export default createBoard({
    name: 'App With CMS Data',
    Board: () => <RealDataWrapper path={ROUTES.projects.to()} />,
    environmentProps: {
        windowWidth: 1298,
        windowHeight: 768,
        canvasWidth: 1024,
        canvasMargin: {
            top: 0, right: 0, bottom: 0, left: 0
        }
    },
});
