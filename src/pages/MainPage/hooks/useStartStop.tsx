import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useActions } from './useActions';
import { useDataBase } from './useDataBase';
import { useGameStatus } from './useGameStatus';
import { useMoveSnake } from './useMoveSnake';

export const useStartStopGame = () => {
  const { isGameOver } = useSelector((state: RootState) => state.snake);
  const { gameStatus, handleGameStatus } = useGameStatus();
  const { restartGame } = useActions();
  const [localIsGameOver, setLocalIsGameOver] = useState(isGameOver);
  const { startMoveSnake, stopMoveSnake } = useMoveSnake();
  const { writeResultToDataBase } = useDataBase();

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

  useEffect(() => {
    if (isGameOver) {
      stopMoveSnake();
      setLocalIsGameOver(true);
      writeResultToDataBase();
      handleGameStatus('Restart');
    }
  }, [isGameOver]);

  return { localIsGameOver, gameStatus, handleStartGame };
};
