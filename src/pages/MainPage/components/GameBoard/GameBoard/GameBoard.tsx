import { useMemo } from 'react';
import { Square } from '../../Square/Square';
import styles from './GameBoard.module.scss';

export function GameBoard() {
  const BOARD_SIZE = 10;

  const squares = useMemo(() => {
    const squaresArray = [];
    for (let y = 0; y < BOARD_SIZE; y += 1) {
      for (let x = 0; x < BOARD_SIZE; x += 1) {
        squaresArray.push({ x, y, id: `${x} + ${y}` });
      }
    }
    return squaresArray;
  }, [BOARD_SIZE]);

  return (
    <div className={styles.gameBoard}>
      {squares.map((square) => (
        <Square key={square.id} square={square} />
      ))}
    </div>
  );
}
