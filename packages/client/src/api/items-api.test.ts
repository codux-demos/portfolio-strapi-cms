/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { describe, expect, it } from 'vitest';
import { FakeConnection } from './fake/fake-connection';
import { createApi } from './items-api';

describe('projects api', () => {
  describe('get projects', () => {
    it('should get all projects', async () => {
      const fakeConnection = new FakeConnection({ numberOfItems: 10 });
      const api = createApi(fakeConnection);

      const projects = await api.getProjects();
      expect(projects.data?.length).toBe(10);
      expect('meta' in projects).toBeTruthy();
    });
  });

  describe('get single project', () => {
    it('should get single project', async () => {
      const fakeConnection = new FakeConnection();
      const api = createApi(fakeConnection);

      const project = await api.getProject(1);
      expect(project.data?.id).toBe(1);
    });

    it('should throw 404 for non existing item', () => {
      const fakeConnection = new FakeConnection();
      const api = createApi(fakeConnection);

      const err = expect.objectContaining({ status: 404 });

      expect(async () => api.getProject(100)).rejects.toThrow(
        expect.objectContaining({ data: null, error: err }) as Error,
      );
    });
  });
});
