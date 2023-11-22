import { APIResponseData, APIResponseCollectionMetadata } from './strapi-types';

export type StrapiError = { status: number; name: string; message: string; details: unknown };

export interface Connection {
  sendGetRequest<T>(apiPath: string[]): Promise<T>;
}

export type StrapiTodo = APIResponseData<'api::todo.todo'>;

export type CollectionMetaData = APIResponseCollectionMetadata;
