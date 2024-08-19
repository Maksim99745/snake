import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SNAKE_MOVE_SPEED } from '../../varibles/commonVariables';
import { GameBoard } from './components/board/GameBoard/GameBoard';
import { useActions } from './hooks/useActions';
import { useGameStatus } from './hooks/useGameStatus';

export default function MainPage() {
  const { score } = useSelector((state: RootState) => state.snake);
  const { gameStatus, handleGameStatus } = useGameStatus();
  const { moveSnake, changeDirectionValue, setNewDirection, checkApple, checkGameOver } = useActions();

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateSnake = () => {
    moveSnake();
    setNewDirection();
    checkApple();
    checkGameOver();
  };

  const startTime = () => {
    timer.current = setInterval(() => updateSnake(), SNAKE_MOVE_SPEED);
  };

  const stopTimer = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const handleStartGame = () => {
    if (gameStatus !== 'Stop') {
      startTime();
    } else {
      stopTimer();
    }
    handleGameStatus();
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    changeDirectionValue(event.key);
  };

  return (
    <div onKeyDownCapture={keyDownHandler}>
      <h2>Snake game</h2>
      <h3>Score: {score}</h3>
      <div>
        <GameBoard />
      </div>
      <button type="button" onClick={handleStartGame}>
        {gameStatus}
      </button>
    </div>
  );
}
