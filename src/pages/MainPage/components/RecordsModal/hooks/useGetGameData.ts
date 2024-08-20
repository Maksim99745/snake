import useSWR from 'swr';
import { GameData } from '../../../../../models/GameData';
import { useDataBase } from '../../../hooks/useDataBase';

export const useGetGameData = () => {
  const { getGameDate } = useDataBase();
  return useSWR<GameData[]>(() => getGameDate());
};
