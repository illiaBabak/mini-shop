import { ItemAction, LOADING_ITEMS, SAVE_ITEMS } from 'src/actions/itemsActions';
import { ItemType } from 'src/types';

export type ItemsInitialState = {
  items: ItemType[];
  isLoading: boolean;
};

const initialState: ItemsInitialState = {
  items: [],
  isLoading: false,
};

export const itemsReducer = (state = initialState, action: ItemAction): ItemsInitialState => {
  switch (action.type) {
    case LOADING_ITEMS:
      return {
        ...state,
        isLoading: true,
      };

    case SAVE_ITEMS:
      return {
        isLoading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};
