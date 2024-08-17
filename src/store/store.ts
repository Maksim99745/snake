import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as appleReducer } from './apple/apple.slice';
import { reducer as snakeReducer } from './snake/snake.slice';

const reducers = combineReducers({
  snake: snakeReducer,
  apple: appleReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
