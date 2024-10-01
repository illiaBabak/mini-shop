import { CartItemType, ItemType } from 'src/types/dataTypes';
import { generateKey } from 'src/utils/generateKey';

export const CART_ADD_ITEM = 'cart_add_item';
export const CART_DELETE_ITEM = 'cart_delete_item';
export const CART_ADD_PRICE = 'cart_add_price';
export const CART_SUBSTRACKT_PRICE = 'cart_substrackt_price';
export const CART_CLEAN_UP = 'cart_clean_up';

export type CartAction =
  | {
      type: typeof CART_ADD_ITEM;
      payload: CartItemType;
    }
  | { type: typeof CART_DELETE_ITEM; payload: string }
  | { type: typeof CART_ADD_PRICE; payload: number }
  | { type: typeof CART_SUBSTRACKT_PRICE; payload: number }
  | { type: typeof CART_CLEAN_UP };

export const cartAddItem = (item: ItemType): CartAction => ({
  type: CART_ADD_ITEM,
  payload: {
    ...item,
    itemKey: generateKey(12),
  },
});

export const cartDeleteItem = (key: string): CartAction => ({
  type: CART_DELETE_ITEM,
  payload: key,
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
