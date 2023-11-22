import { APIResponseData, APIResponseCollectionMetadata } from './strapi-types';

export type StrapiError = { status: number; name: string; message: string; details: unknown };

export interface Connection {
  sendGetRequest<T>(apiPath: string[], params?: { [key: string]: string }): Promise<T>;
}

export type StrapiProject = APIResponseData<'api::project.project'>;
export type StrapiProjectItem = APIResponseData<'api::project-item.project-item'>;
export type StrapiAbout = APIResponseData<'api::about.about'>;
export type StrapiImage = StrapiProject['attributes']['coverImage'];

export type CollectionMetaData = APIResponseCollectionMetadata;
