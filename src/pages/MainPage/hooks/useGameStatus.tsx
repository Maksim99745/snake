import { useState } from 'react';

export const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState<'start' | 'stop'>('start');
  const handleGameStatus = () => {
    if (gameStatus === 'start') {
      setGameStatus('stop');
    } else {
      setGameStatus('start');
    }
  };
  return { gameStatus, handleGameStatus };
};
