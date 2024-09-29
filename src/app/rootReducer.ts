import { combineReducers } from 'redux';
import { itemsReducer } from 'src/reducers/itemsReducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
