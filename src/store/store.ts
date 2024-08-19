import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as snakeReducer } from './snake/snake.slice';

const reducers = combineReducers({
  snake: snakeReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
