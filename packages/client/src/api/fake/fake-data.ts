import { faker } from '@faker-js/faker';
import {
  CollectionMetaData,
  StrapiAbout,
  StrapiError,
  StrapiImage,
  StrapiPath,
  StrapiProject,
  StrapiProjectItem,
} from '../types';

export type FakeDataSettings = {
  numberOfItems?: number;
  fakerSeed?: number;
};

declare global {
  // eslint-disable-next-line no-var
  var FAKE_DATA: FakeData;
}

export function getFakeData(settings?: FakeDataSettings) {
  /**
   * setting a faker.seed will generate the same response each time (with some conditions)
   * we need it to run in codux otherwise it changes the data on each change in the property panel.
   * on the other hand we want to generate different data in most test cases to avoid accidental passing tests.
   */
  if (import.meta.env.MODE === 'development' || settings?.fakerSeed) {
    faker.seed(settings?.fakerSeed || 111);
  }

  const numberOfProjects = settings?.numberOfItems || 10;
  const data = {
    projects: Array.from(Array(numberOfProjects)).map((val, i) => createProject(i)),
    'project-items': createProjectItems(numberOfProjects, settings?.numberOfItems || 10),
    about: createAbout(),
  } satisfies Record<StrapiPath, unknown>;

  globalThis.FAKE_DATA = data;
  return data;
}
export type FakeData = ReturnType<typeof getFakeData>;
/**
 * we don't really receive the projectId from strapi.
 * if we populate the project we will receive the whole project item
 * we do this here so we can filter project items by project in the fake connection
 */
type ProjectItemWithProjectId = Omit<StrapiProjectItem, 'attributes'> & {
  attributes: Omit<StrapiProjectItem['attributes'], 'project'> & { project: string };
};

function createProjectItems(numberOfProjects: number, numberOfItems?: number) {
  const items: ProjectItemWithProjectId[] = [];

  for (let projectId = 0; projectId < numberOfProjects; projectId++) {
    const itemsCount = numberOfItems || faker.number.int({ min: 1, max: 10 });
    items.push(...Array.from(Array(itemsCount)).map((val, itemId) => createProjectItem(itemId, projectId)));
  }

  return items;
}

function createAbout(): StrapiAbout {
  return {
    id: 1,
    attributes: {
      title: faker.lorem.words({ min: 1, max: 3 }),
      subTitle: faker.person.bio(),
      image: createImage(),
      richtext: getMarkdown(),
      ...getDates(),
    },
  };
}

function getMarkdown() {
  const string = faker.lorem.paragraphs(3).replace(/\n/gi, '\n\n');
  const words = string.split(' ');
  words[3] = `**${words[3]}**`;
  words[7] = `<u>${words[7]}</u>`;
  return words.join(' ');
}

function createProject(id: number): StrapiProject {
  return {
    id,
    attributes: {
      title: faker.lorem.words({ min: 1, max: 3 }),
      description: faker.lorem.sentences({ min: 2, max: 3 }),
      coverImage: createImage(),
      ...getDates(),
    },
  };
}

function createProjectItem(id: number, projectId: number): ProjectItemWithProjectId {
  const width = faker.number.int({ min: 200, max: 600 });
  const height = faker.number.int({ min: 200, max: 400 });
  return {
    id,
    attributes: {
      title: faker.lorem.words({ min: 1, max: 3 }),
      description: faker.lorem.paragraphs({ min: 0, max: 2 }),
      image: createImage({ width, height }),
      project: projectId.toString(),
    },
  };
}

export function createImage(size?: { width?: number; height?: number }): StrapiImage {
  return {
    data: {
      id: faker.number.int(1000),
      attributes: {
        url: faker.image.url(size),
        hash: faker.string.sample(10),
        mime: faker.system.mimeType(),
        name: faker.word.noun(),
        size: faker.number.int(100),
        provider: 'faker',
        width: size?.width,
        height: size?.height,
      },
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
