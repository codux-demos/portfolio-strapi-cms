import { createBoard } from '@wixc3/react-board';
import { ProjectItem } from '../../../../components/project-item/project-item';
import { createImage } from '../../../../api/fake/fake-data';

export default createBoard({
  name: 'ProjectItem',
  Board: () => (
    <ProjectItem
      title="Project Item"
      image={createImage({ width: 300, height: 400 })}
      description="this is a very long description... this is a very long description... this is a very long description..."
    />
  ),
  isSnippet: true,
  environmentProps: {
    canvasMargin: {
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
});
