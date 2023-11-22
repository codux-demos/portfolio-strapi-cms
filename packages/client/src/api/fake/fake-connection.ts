import { Connection } from '../types';
import { FakeData, FakeDataSettings, fake404, fakePaginationMeta, getFakeData } from './fake-data';

export class FakeConnection implements Connection {
  data: FakeData;
  constructor(setting?: FakeDataSettings) {
    this.data = getFakeData(setting);
  }

  sendGetRequest<T>(apiPath: string[]) {
    if (apiPath.length === 0 || apiPath.length > 2) {
      throw new Error('path has to have at least one segment and no more than 2');
    }
    const collectionKey = apiPath[0];
    if (!(collectionKey in this.data)) {
      throw new Error(`there is no such collection ${collectionKey}`);
    }
    const collection = this.data[collectionKey as keyof FakeData];

    if (apiPath.length === 1) {
      return Promise.resolve({
        data: cloneDeep(collection),
        meta: cloneDeep(fakePaginationMeta),
      } as T);
    }

    const id = parseInt(apiPath[1]);
    const item = collection.find((it) => it.id === id);

    if (!item) {
      return Promise.reject({
        data: null,
        error: cloneDeep(fake404),
      });
    }
    return Promise.resolve({ data: cloneDeep(item), meta: {} } as T);
  }
}

function cloneDeep<T>(serializableObject: T) {
  return JSON.parse(JSON.stringify(serializableObject)) as T;
}
