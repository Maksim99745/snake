import { useState } from 'react';

type UseGameStatusProps = 'Start' | 'Stop' | 'Restart';

export const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState<UseGameStatusProps>('Start');
  const handleGameStatus = (newGameStatus: UseGameStatusProps) => {
    if (gameStatus === 'Start') {
      setGameStatus(newGameStatus);
    } else if (gameStatus === 'Restart') {
      setGameStatus(newGameStatus);
    } else if (gameStatus === 'Stop') {
      setGameStatus(newGameStatus);
    }
  };
  return { gameStatus, handleGameStatus };
};
