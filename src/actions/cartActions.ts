import { ItemType } from 'src/types';

export const CART_ADD_ITEM = 'cart_add_item';
export const CART_DELETE_ITEM = 'cart_delete_item';
export const CART_CLEAN_UP = 'cart_clean_up';
export const CART_REMOVE_ITEM = 'cart_remove_item';

export type CartAction =
  | {
      type: typeof CART_ADD_ITEM;
      payload: ItemType;
    }
  | { type: typeof CART_DELETE_ITEM; payload: ItemType }
  | { type: typeof CART_CLEAN_UP }
  | { type: typeof CART_REMOVE_ITEM; payload: ItemType };

export const cartAddItem = (item: ItemType): CartAction => ({
  type: CART_ADD_ITEM,
  payload: item,
});

export const cartDeleteItem = (item: ItemType): CartAction => ({
  type: CART_DELETE_ITEM,
  payload: item,
});

export const cartCleanUp = (): CartAction => ({
  type: CART_CLEAN_UP,
});

export const cartRemoveItem = (item: ItemType): CartAction => ({
  type: CART_REMOVE_ITEM,
  payload: item,
});
