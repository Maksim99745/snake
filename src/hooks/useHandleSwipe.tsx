import { useSwipeable } from 'react-swipeable';
import { useActions } from '../pages/MainPage/hooks/useActions';

export const useHandleSwipe = () => {
  const { changeDirectionValue } = useActions();

  const handleSwipe = (direction: string) => () => {
    changeDirectionValue(direction);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipe('ArrowLeft'),
    onSwipedRight: handleSwipe('ArrowRight'),
    onSwipedUp: handleSwipe('ArrowUp'),
    onSwipedDown: handleSwipe('ArrowDown'),
    trackMouse: true,
  });
  return { handlers };
};
