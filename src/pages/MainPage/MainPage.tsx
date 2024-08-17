import { useRef } from 'react';
import { GameBoard } from './components/board/GameBoard/GameBoard';
import { useActions } from './hooks/useActions';
import { useGameStatus } from './hooks/useGameStatus';

export default function MainPage() {
  const { gameStatus, handleGameStatus } = useGameStatus();
  const { moveSnake } = useActions();

  const SNAKE_MOVE_SPEED = 300;

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const update = () => {
    moveSnake();
  };

  const startTime = () => {
    timer.current = setInterval(() => update(), SNAKE_MOVE_SPEED);
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

  return (
    <div>
      <h2>Snake game</h2>
      <div>
        <GameBoard />
      </div>
      <button type="button" onClick={handleStartGame}>
        {gameStatus}
      </button>
    </div>
  );
}
