import { ItemType } from 'src/types';

export const LOADING_ITEMS = 'LOADING_ITEMS';
export const SAVE_ITEMS = 'SAVE_ITEMS';

export type ItemAction = { type: typeof LOADING_ITEMS } | { type: typeof SAVE_ITEMS; payload: ItemType[] };

export const loadingItems = (): ItemAction => ({
  type: LOADING_ITEMS,
});

export const saveItems = (items: ItemType[]): ItemAction => ({
  type: SAVE_ITEMS,
  payload: items,
});
