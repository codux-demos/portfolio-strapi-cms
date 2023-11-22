import { faker } from '@faker-js/faker';
import { StrapiError, CollectionMetaData, StrapiImage, StrapiProject, StrapiProjectItem } from '../types';

export type FakeDataSettings = {
  numberOfItems?: number;
};

export function getFakeData(settings?: FakeDataSettings) {
  const numberOfProjects = settings?.numberOfItems || 10;
  return {
    projects: Array.from(Array(numberOfProjects)).map((val, i) => createProject(i)),
    'project-items': createProjectItems(numberOfProjects, settings?.numberOfItems || 10),
  };
}
export type FakeData = ReturnType<typeof getFakeData>;
type ProjectItemExtended = StrapiProjectItem | { [key: string]: string };
type ProjectExtended = StrapiProject | { [key: string]: string };

function createProjectItems(numberOfProjects: number, numberOfItems?: number) {
  const items: ProjectItemExtended[] = [];

  for (let projectId = 0; projectId < numberOfProjects; projectId++) {
    const itemsCount = numberOfItems || faker.number.int({ min: 1, max: 10 });
    items.push(...Array.from(Array(itemsCount)).map((val, itemId) => createProjectItem(itemId, projectId)));
  }

  return items;
}

function createProject(id: number): ProjectExtended {
  return {
    id,
    attributes: {
      title: faker.lorem.words({ min: 1, max: 3 }),
      description: faker.lorem.sentences({ min: 0, max: 3 }),
      coverImage: createImage(),
      ...getDates(),
    },
  };
}

function createProjectItem(id: number, projectId: number): ProjectItemExtended {
  return {
    id,
    'filters[project]': projectId.toString(),
    attributes: {
      title: faker.lorem.words({ min: 1, max: 3 }),
      description: faker.lorem.paragraphs({ min: 0, max: 3 }),
      image: createImage(),
    },
  };
}

function createImage(): StrapiImage {
  return {
    id: faker.number.int(1000),
    attributes: {
      url: faker.image.url(),
      hash: faker.string.sample(10),
      mime: faker.system.mimeType(),
      name: faker.word.noun(),
      size: faker.number.int(100),
      provider: '',
    },
  };
}

function getDates() {
  const created = faker.date.past({ years: 1 });
  return {
    createdAt: created,
    updatedAt: faker.date.between({ from: created, to: Date.now() }),
    publishedAt: faker.date.between({ from: created, to: Date.now() }),
  };
}

export const fakePaginationMeta: CollectionMetaData = {
  pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 },
};
export const fake404: StrapiError = {
  status: 404,
  name: 'NotFoundError',
  message: 'Not Found',
  details: {},
};
