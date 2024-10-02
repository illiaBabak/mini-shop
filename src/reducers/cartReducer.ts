import {
  CART_ADD_ITEM,
  CART_ADD_PRICE,
  CART_CLEAN_UP,
  CART_DELETE_ITEM,
  CART_REMOVE_ITEM,
  CART_SUBSTRACKT_PRICE,
  CartAction,
} from 'src/actions/cartActions';
import { CartItem } from 'src/types/dataTypes';

export type CartInitialState = {
  price: number;
  items: CartItem[];
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
        items: state.items.find((item) => item.id === action.payload.id)
          ? state.items.map((item) => (item.id === action.payload.id ? { ...item, count: item.count + 1 } : item))
          : [...state.items, { ...action.payload, count: 1 }],
      };

    case CART_DELETE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.payload ? { ...item, count: item.count - 1 } : item)),
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
        price: 0,
        items: [],
      };

    case CART_REMOVE_ITEM: {
      const itemToRemove = state.items.find((item) => item.id === action.payload);

      return {
        price: state.price - (itemToRemove ? itemToRemove.price * itemToRemove.count : 0),

        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
