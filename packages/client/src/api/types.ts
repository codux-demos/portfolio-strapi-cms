import { Payload } from '@portfolio/strapi';

export type StrapiError = { status: number; name: string; message: string; details: unknown };

export type ItemFieldsByStrapi = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export interface Connection {
  sendGetRequest<T>(apiPath: string[]): Promise<Payload<T>>;
}
