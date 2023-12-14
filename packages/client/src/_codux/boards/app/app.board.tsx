import { createBoard } from '@wixc3/react-board';
import { RealDataWrapper } from '../../board-wrappers/real-data-wrapper';
import { ROUTES } from '../../../router/config';

export default createBoard({
    name: 'App With Strapi Data',
    Board: () => <RealDataWrapper path={ROUTES.projects.to()} />,
    environmentProps: {
        windowWidth: 654,
        windowHeight: 768,
        canvasWidth: 1024,
    },
});
