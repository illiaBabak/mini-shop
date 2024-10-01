import { combineReducers } from 'redux';
import { cartReducer } from 'src/reducers/cartReducer';
import { itemsReducer } from 'src/reducers/itemsReducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
