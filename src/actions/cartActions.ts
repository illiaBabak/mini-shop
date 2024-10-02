import { ItemType } from 'src/types/dataTypes';

export const CART_ADD_ITEM = 'cart_add_item';
export const CART_DELETE_ITEM = 'cart_delete_item';
export const CART_ADD_PRICE = 'cart_add_price';
export const CART_SUBSTRACKT_PRICE = 'cart_substrackt_price';
export const CART_CLEAN_UP = 'cart_clean_up';
export const CART_REMOVE_ITEM = 'cart_remove_item';

export type CartAction =
  | {
      type: typeof CART_ADD_ITEM;
      payload: ItemType;
    }
  | { type: typeof CART_DELETE_ITEM; payload: number }
  | { type: typeof CART_ADD_PRICE; payload: number }
  | { type: typeof CART_SUBSTRACKT_PRICE; payload: number }
  | { type: typeof CART_CLEAN_UP }
  | { type: typeof CART_REMOVE_ITEM; payload: number };

export const cartAddItem = (item: ItemType): CartAction => ({
  type: CART_ADD_ITEM,
  payload: item,
});

export const cartDeleteItem = (id: number): CartAction => ({
  type: CART_DELETE_ITEM,
  payload: id,
});

export const cartAddPrice = (price: number): CartAction => ({
  type: CART_ADD_PRICE,
  payload: price,
});

export const cartSubstracktPrice = (price: number): CartAction => ({
  type: CART_SUBSTRACKT_PRICE,
  payload: price,
});

export const cartCleanUp = (): CartAction => ({
  type: CART_CLEAN_UP,
});

export const cartRemoveItem = (id: number): CartAction => ({
  type: CART_REMOVE_ITEM,
  payload: id,
});
