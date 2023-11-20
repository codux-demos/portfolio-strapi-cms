export type StrapiPagination = { page: number; pageSize: number; pageCount: number; total: number };
export type StrapiMeta = { pagination?: StrapiPagination };
export type StrapiError = { status: number; name: string; message: string; details: unknown };

export type ItemFieldsByStrapi = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiItem<T> = { id: number; attributes: Omit<T, 'id'> };

type Item<T> = T & { id: number } & ItemFieldsByStrapi;

export interface Connection {
  sendGetRequest<T>(apiPath: string[]): Promise<{ data: T; meta: StrapiMeta }>;
}

export type Todo = Item<{
  Title: string;
  description: string;
  isDone: boolean;
}>;
