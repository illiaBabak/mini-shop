import { CART_ADD_ITEM, CART_CLEAN_UP, CART_DELETE_ITEM, CART_REMOVE_ITEM, CartAction } from 'src/actions/cartActions';
import { ItemType } from 'src/types';

export type CartInitialState = {
  price: number;
  items: ItemType[];
};

export const initialState: CartInitialState = {
  price: 0,
  items: [],
};

export const cartReducer = (state = initialState, action: CartAction): CartInitialState => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const selectedItem = state.items.find((item) => item.id === action.payload.id);

      return {
        price: Number((state.price + action.payload.price).toFixed(2)),
        items: selectedItem
          ? state.items.map((item) =>
              item.id === action.payload.id ? { ...item, count: (item.count ?? 0) + 1 } : item
            )
          : [...state.items, { ...action.payload, count: 1 }],
      };
    }

    case CART_DELETE_ITEM:
      return {
        price: Number((state.price - action.payload.price).toFixed(2)),
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, count: (item.count ?? 0) - 1 } : item
        ),
      };

    case CART_CLEAN_UP:
      return {
        price: 0,
        items: [],
      };

    case CART_REMOVE_ITEM: {
      const { price, id, count = 1 } = action.payload;

      return {
        price: Number((state.price - price * count).toFixed(2)),
        items: state.items.filter((item) => item.id !== id),
      };
    }

    default:
      return state;
  }
};
