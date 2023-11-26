import { createBoard } from '@wixc3/react-board';
import { AboutPage } from '../../../views/about-page/about-page';

export default createBoard({
  name: 'About Page',
  Board: () => <AboutPage />,
});
