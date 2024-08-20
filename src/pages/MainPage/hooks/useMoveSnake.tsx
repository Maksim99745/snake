import { useRef } from 'react';
import { SNAKE_MOVE_SPEED } from '../../../varibles/commonVariables';
import { useActions } from './useActions';

export const useMoveSnake = () => {
  const { moveSnake, setNewDirection, checkApple, checkGameOver } = useActions();

  const updateSnake = () => {
    moveSnake();
    setNewDirection();
    checkApple();
    checkGameOver();
  };

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startMoveSnake = () => {
    timer.current = setInterval(() => updateSnake(), SNAKE_MOVE_SPEED);
  };

  const stopMoveSnake = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  return { startMoveSnake, stopMoveSnake };
};
