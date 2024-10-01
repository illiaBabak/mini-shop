import {
  CART_ADD_ITEM,
  CART_ADD_PRICE,
  CART_CLEAN_UP,
  CART_DELETE_ITEM,
  CART_SUBSTRACKT_PRICE,
  CartAction,
} from 'src/actions/cartActions';
import { CartItemType } from 'src/types/dataTypes';

export type CartInitialState = {
  price: number;
  items: CartItemType[];
};

export const initialState: CartInitialState = {
  price: 0,
  items: [],
};

export const cartReducer = (state = initialState, action: CartAction): CartInitialState => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case CART_DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.itemKey !== action.payload)],
      };

    case CART_ADD_PRICE:
      return {
        ...state,
        price: Number((state.price + action.payload).toFixed(2)),
      };

    case CART_SUBSTRACKT_PRICE:
      return {
        ...state,
        price: Number((state.price - action.payload).toFixed(2)),
      };

    case CART_CLEAN_UP:
      return {
        ...state,
        price: 0,
        items: [],
      };

    default:
      return state;
  }
};
