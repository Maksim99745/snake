import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GameBoard } from './components/GameBoard/GameBoard/GameBoard';
import { useActions } from './hooks/useActions';
import { useGameStatus } from './hooks/useGameStatus';
import { useMoveSnake } from './hooks/useMoveSnake';
import styles from './MainPage.module.scss';

export default function MainPage() {
  const { score, isGameOver } = useSelector((state: RootState) => state.snake);
  const { gameStatus, handleGameStatus } = useGameStatus();
  const { changeDirectionValue, restartGame } = useActions();
  const [localIsGameOver, setLocalIsGameOver] = useState(isGameOver);
  const { startMoveSnake, stopMoveSnake } = useMoveSnake();
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const handleStartGame = () => {
    if (gameStatus === 'Restart') {
      startMoveSnake();
      restartGame();
      setLocalIsGameOver(false);
      handleGameStatus('Stop');
    } else if (gameStatus === 'Stop') {
      stopMoveSnake();
      handleGameStatus('Start');
    } else if (gameStatus === 'Start') {
      startMoveSnake();
      handleGameStatus('Stop');
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    changeDirectionValue(event.key);
  };

  useEffect(() => {
    if (isGameOver) {
      stopMoveSnake();
      setLocalIsGameOver(true);
      handleGameStatus('Restart');
    }
  }, [isGameOver]);

  const handleBlur = () => {
    if (gameContainerRef.current) {
      gameContainerRef.current.focus();
    }
  };

  return (
    <div
      ref={gameContainerRef}
      tabIndex={0}
      role="button"
      onKeyDownCapture={keyDownHandler}
      onBlur={handleBlur}
      style={{ outline: 'none' }}
    >
      <h2>Snake game</h2>
      {!localIsGameOver && <h2>Current score: {score}</h2>}
      {localIsGameOver && <h2 className={styles.gameOver}>Game over! Your final score: {score}</h2>}
      <div>
        <GameBoard />
      </div>
      <button type="button" onClick={handleStartGame}>
        {gameStatus}
      </button>
    </div>
  );
}
