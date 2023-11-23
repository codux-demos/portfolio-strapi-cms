import { createBoard } from '@wixc3/react-board';
import { ProjectItem } from '../../../components/project-item/project-item';
import { createImage } from '../../../api/fake/fake-data';

export default createBoard({
  name: 'ProjectItem',
  Board: () => (
    <ProjectItem
      projectItemAttr={{
        title: 'Project Item',
        image: createImage(),
        description: 'this is a very long description...',
      }}
    />
  ),
  isSnippet: true,
});
