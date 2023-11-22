import { useContext } from 'react';
import { APIContext } from './items-api';
import useSWR, { useSWRConfig } from 'swr';
import { StrapiTodo } from './types';

type ItemsMap = { [k: string]: StrapiTodo };

export function useItems() {
  const api = useContext(APIContext);
  const { mutate } = useSWRConfig();
  return useSWR('items/list', api.getItems, {
    onSuccess: (items) => {
      const itemsMap: ItemsMap = Object.fromEntries(items.data.map((it) => [it.id, it]));
      mutate('items/map', itemsMap).catch((e) => {
        console.error('mutate failed', e);
      });
    },
  });
}

export function useItem(id: number) {
  const api = useContext(APIContext);
  const { cache } = useSWRConfig();
  const itemsMap = cache.get('items/map');
  const item = (itemsMap?.data as ItemsMap | undefined)?.[id];

  const fetched = useSWR(!item ? `item/${id}` : null, () => api.getItem(id));

  return item ? { data: item, isLoading: false } : { isLoading: fetched.isLoading, data: fetched.data?.data };
}
