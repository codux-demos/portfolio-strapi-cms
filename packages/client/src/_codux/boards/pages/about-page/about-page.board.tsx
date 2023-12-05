import { createBoard } from '@wixc3/react-board';
import { ROUTES } from '../../../../router/config';
import { AboutPage } from '../../../../pages/about-page/about-page';
import { PageWrapper } from '../../../board-wrappers/page-wrapper';

export default createBoard({
    name: 'About Page',
    Board: () => (
        <PageWrapper path={ROUTES.about.to()}>
            <AboutPage />
        </PageWrapper>
    ),
    environmentProps: {
        windowWidth: 375, canvasWidth: 1037, windowHeight: 667
    },
});
