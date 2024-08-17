import { useState } from 'react';

export const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState<'Start' | 'Stop'>('Start');
  const handleGameStatus = () => {
    if (gameStatus === 'Start') {
      setGameStatus('Stop');
    } else {
      setGameStatus('Start');
    }
  };
  return { gameStatus, handleGameStatus };
};
