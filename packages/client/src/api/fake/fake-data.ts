import { faker } from '@faker-js/faker';
import { StrapiError, StrapiTodo, CollectionMetaData } from '../types';

export type FakeDataSettings = {
  numberOfItems?: number;
};

export function getFakeData(settings?: FakeDataSettings) {
  return {
    todos: Array.from(Array(settings?.numberOfItems || 10)).map((val, i) => createTodo(i)),
  };
}
export type FakeData = ReturnType<typeof getFakeData>;

function createTodo(id: number): StrapiTodo {
  const created = faker.date.past({ years: 1 });
  const item = {
    id,
    attributes: {
      Title: faker.lorem.words(2),
      description: faker.lorem.paragraph(3),
      isDone: false,
      createdAt: created,
      updatedAt: faker.date.between({ from: created, to: Date.now() }),
      publishedAt: faker.date.between({ from: created, to: Date.now() }),
    },
  };
  return item;
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
