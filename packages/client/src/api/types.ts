import { Payload, Todo } from '@portfolio/strapi';

export type StrapiPagination = { page: number; pageSize: number; pageCount: number; total: number };
export type StrapiMeta = { pagination?: StrapiPagination };
export type StrapiError = { status: number; name: string; message: string; details: unknown };

export type ItemFieldsByStrapi = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiItem<T> = { id: number; attributes: Omit<T, 'id'> };

export interface Connection {
  sendGetRequest<T>(apiPath: string[]): Promise<Payload<Todo>>;
}
