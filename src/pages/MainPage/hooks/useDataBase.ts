import { get, getDatabase, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import app from '../../../fireBaseConfig';
import { GameData } from '../../../models/GameData';
import { RootState } from '../../../store/store';

export const useDataBase = () => {
  const { score } = useSelector((state: RootState) => state.snake);
  const writeResultToDataBase = async () => {
    const result = { score: `Game result: ${score} apples`, time: `Time of the game: ${new Date().toLocaleString()}` };
    const dataBase = getDatabase(app);
    const newDoc = push(ref(dataBase, 'gameResults'));
    await set(newDoc, result);
  };

  const getGameDate = async (): Promise<GameData[]> => {
    const dataBase = getDatabase(app);
    const dataBaseRef = ref(dataBase, 'gameResults');
    const snapshot = await get(dataBaseRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  };
  return { writeResultToDataBase, getGameDate };
};
