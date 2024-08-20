import useSWR, { mutate } from 'swr';
import { GameData } from '../../../../../models/GameData';
import { useDataBase } from '../../../hooks/useDataBase';

export const useGetGameData = () => {
  const { getGameDate } = useDataBase();
  const { data, error, isLoading } = useSWR<GameData[]>('gameResults', getGameDate);

  const revalidate = () => {
    mutate('gameResults');
  };

  return { data, error, isLoading, revalidate };
};
