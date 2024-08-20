import { getDatabase, push, ref, set } from 'firebase/database';
import { useState } from 'react';
import { get } from 'react-hook-form';
import { useSelector } from 'react-redux';
import app from '../../../fireBaseConfig';
import { GameData } from '../../../models/GameData';
import { RootState } from '../../../store/store';

export const useDataBase = () => {
  const { score } = useSelector((state: RootState) => state.snake);
  const [gameData, setGameData] = useState<GameData[]>([]);
  const writeResultToDataBase = async () => {
    const result = { score: `Game result: ${score} apples`, time: `Time: ${new Date().toLocaleString()}` };
    const dataBase = getDatabase(app);
    const newDoc = push(ref(dataBase, 'gameResults'));
    await set(newDoc, result);
  };

  const getGameDate = async () => {
    const dataBase = getDatabase(app);
    const dataBaseRef = ref(dataBase, 'gameResults');
    const snapshot = await get(dataBaseRef);
    if (snapshot) {
      setGameData(Object.values(snapshot.val()));
    }
    return gameData;
  };
  return { writeResultToDataBase, getGameDate };
};
