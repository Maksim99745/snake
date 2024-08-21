import { SwipeEventData, useSwipeable } from 'react-swipeable';
import { useActions } from '../pages/MainPage/hooks/useActions';

export const useHandleSwipe = () => {
  const { changeDirectionValue } = useActions();

  const handleSwipe = (direction: string) => (eventData: SwipeEventData) => {
    if (eventData.event.cancelable) {
      eventData.event.preventDefault();
    }
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
