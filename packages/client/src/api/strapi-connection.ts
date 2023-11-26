import { Connection, StrapiImage } from './types';

function buildUrl(apiName: string, params?: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `${import.meta.env.VITE_API}${apiName}?${searchParams.toString()}`;
}

const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
/**
 * this function is passed to the `JSON.parse`. It attempts to recognise date ISO strings and parse them into dates
 * so they will be easier to work with.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseJsonDates(key: string, value: any): any {
  if (typeof value === 'string') {
    const a = reISO.exec(value);
    return a ? new Date(value) : value;
  }
  return value;
}

/**
 * wrapps the fetch to Strapi calls.
 * we have this wrapper for 2 reasons:
 * 1. so we don't have to duplicate code (like parsing strings to dates)
 * 2. so we can easily mock the fetch and return fake data, or replace the fetch with anything else
 */
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

export function getImageUrl(image: StrapiImage | undefined) {
  const provider = image?.data.attributes.provider;
  if (provider === 'local') {
    return `${import.meta.env.VITE_MEDIA}${image?.data.attributes.url}`;
  }
  if (provider === 'faker') {
    return image?.data.attributes.url;
  }
  throw new Error(`image provider ${provider} not implemented`);
}
