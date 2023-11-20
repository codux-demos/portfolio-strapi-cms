/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { describe, expect, it } from 'vitest';
import { FakeConnection } from './fake/fake-connection';
import { createApi } from './items-api';

describe('items api', () => {
  describe('get items', () => {
    it('should get all items', async () => {
      const fakeConnection = new FakeConnection({ numberOfItems: 10 });
      const api = createApi(fakeConnection);

      const items = await api.getItems();
      expect(items.data?.length).toBe(10);
      expect('meta' in items).toBeTruthy();
    });
  });

  describe('get single item', () => {
    it('should get single item', async () => {
      const fakeConnection = new FakeConnection();
      const api = createApi(fakeConnection);

      const item = await api.getItem(1);
      expect(item.data?.id).toBe(1);
    });

    it('should throw 404 for non existing item', () => {
      const fakeConnection = new FakeConnection();
      const api = createApi(fakeConnection);

      const err = expect.objectContaining({ status: 404 });

      expect(async () => api.getItem(100)).rejects.toThrow(
        expect.objectContaining({ data: null, error: err }) as Error,
      );
    });
  });
});
