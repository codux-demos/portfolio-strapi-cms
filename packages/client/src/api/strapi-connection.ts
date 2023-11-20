import { Connection } from './types';

const API_URL = 'http://localhost:1337/api/';

function buildUrl(apiName: string, params?: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `${API_URL}${apiName}?${searchParams.toString()}`;
}

export class StrapiConnection implements Connection {
  async sendGetRequest(apiPath: string[]) {
    try {
      const res = await fetch(buildUrl(apiPath.join('/')), {
        method: 'GET',
      });
      if (res.ok) {
        return res.json();
      }
      throw res.json();
    } catch (e) {
      console.log;
      throw e;
    }
  }
}
