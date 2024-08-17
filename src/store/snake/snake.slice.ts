import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snakeCoordinates: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ],
  snakeSize: 2,
};

const THE_LAST_SQUARE_INDEX = 9;

export const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    moveSnake(state) {
      const { x, y } = state.snakeCoordinates[state.snakeCoordinates.length - 1];
      const newXCoordinate = x >= THE_LAST_SQUARE_INDEX ? 0 : x + 1;
      const newSnakeCoordinates = [...state.snakeCoordinates, { x: newXCoordinate, y }];

      return {
        ...state,
        snakeCoordinates: newSnakeCoordinates.slice(-state.snakeSize),
      };
    },
  },
});

export const { actions, reducer } = snakeSlice;
