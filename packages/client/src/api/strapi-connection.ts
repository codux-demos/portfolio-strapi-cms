import { Connection } from './types';

const API_URL = 'http://localhost:5000/api/';

function buildUrl(apiName: string, params?: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `${API_URL}${apiName}?${searchParams.toString()}`;
}

const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseJsonDates(key: string, value: any): any {
  if (typeof value === 'string') {
    const a = reISO.exec(value);
    return a ? new Date(value) : value;
  }
  return value;
}
export class StrapiConnection implements Connection {
  async sendGetRequest<T>(apiPath: string[], params?: { [key: string]: string }) {
    try {
      const res = await fetch(buildUrl(apiPath.join('/'), params), {
        method: 'GET',
      });
      if (res.ok) {
        const json = await res.text();
        return JSON.parse(json, parseJsonDates) as T;
      }
      throw res.json();
    } catch (e) {
      console.log;
      throw e;
    }
  }
}
