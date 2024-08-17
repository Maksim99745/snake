import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ItemCoordinate } from '../../../../models/ItemCoordinate';
import { RootState } from '../../../../store/store';
import styles from './Square.module.scss';

interface SquareProps {
  square: ItemCoordinate;
}

export function Square({ square }: SquareProps) {
  const snake = useSelector((state: RootState) => state.snake);
  const apple = useSelector((state: RootState) => state.apple);

  const squareStyle = useMemo(() => {
    let style = '';
    if (
      snake.snakeCoordinates.some((snakeCoordinate) => snakeCoordinate.x === square.x && snakeCoordinate.y === square.y)
    ) {
      style = 'snake';
    } else if (apple.some((appleCoordinate) => appleCoordinate.x === square.x && appleCoordinate.y === square.y)) {
      style = 'apple';
    }
    return style;
  }, [square, snake, apple]);

  return <div className={`${styles.square} ${styles[squareStyle]}`} />;
}
