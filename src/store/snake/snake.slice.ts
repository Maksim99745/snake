import { createSlice } from '@reduxjs/toolkit';
import { getNewCoordinate } from '../../utils/getNewCoordinate';
import { STOP_KEY_COMBINATIONS, THE_FIRST_SQUARE_INDEX, THE_LAST_SQUARE_INDEX } from '../../varibles/commonVariables';

const initialState = {
  apple: { x: 5, y: 5 },
  snakeCoordinates: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ],
  isGameOver: false,
  snakeHead: { x: 1, y: 0 },
  score: 0,
  snakeSize: 2,
  direction: 'd',
  stopKeyCombinations: STOP_KEY_COMBINATIONS,
  savedKey: 'd',
};

export const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    moveSnake(state) {
      let { x, y } = state.snakeHead;

      switch (state.direction) {
        case 'd':
        case 'ArrowRight':
          x += 1;
          break;
        case 'a':
        case 'ArrowLeft':
          x -= 1;
          break;
        case 'w':
        case 'ArrowUp':
          y -= 1;
          break;
        case 's':
        case 'ArrowDown':
          y += 1;
          break;
        default:
          break;
      }

      if (
        x < THE_FIRST_SQUARE_INDEX ||
        x > THE_LAST_SQUARE_INDEX ||
        y < THE_FIRST_SQUARE_INDEX ||
        y > THE_LAST_SQUARE_INDEX
      ) {
        return { ...state, isGameOver: true };
      }

      const newSnakeCoordinates = [...state.snakeCoordinates, { x, y }];

      return {
        ...state,
        snakeHead: { x, y },
        snakeCoordinates: newSnakeCoordinates.slice(-state.snakeSize),
      };
    },
    changeDirectionValue(state, action) {
      const isStopCombination = state.stopKeyCombinations.some(
        ([a, b]) => a === state.direction && b === action.payload,
      );

      if (isStopCombination) {
        return state;
      }
      return {
        ...state,
        savedKey: action.payload,
      };
    },
    setNewDirection(state) {
      return { ...state, direction: state.savedKey };
    },
    checkApple(state) {
      const { apple, snakeHead, snakeSize } = state;
      const isApple = apple.x === snakeHead.x && apple.y === snakeHead.y;
      if (!isApple) {
        return state;
      }

      return {
        ...state,
        apple: getNewCoordinate(state.snakeCoordinates),
        snakeSize: snakeSize + 1,
        score: state.score + 1,
      };
    },
    checkGameOver(state) {
      const { x, y } = state.snakeHead;
      const snakeHeadless = state.snakeCoordinates.slice();
      snakeHeadless.pop();
      const isBite = snakeHeadless.find((coordinate) => coordinate.x === x && coordinate.y === y);

      if (isBite) {
        return { ...state, isGameOver: true };
      }

      return state;
    },
    restartGame() {
      return initialState;
    },
  },
});

export const { actions, reducer } = snakeSlice;
