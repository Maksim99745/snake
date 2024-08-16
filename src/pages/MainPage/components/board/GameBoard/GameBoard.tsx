import { Grid } from '@mui/material';
import { Square } from '../../square/Square';

export function GameBoard() {
  const BOARD_SIZE = 10;
  const squares = [];

  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      squares.push({ x, y });
    }
  }

  return (
    <Grid container xs={12}>
      {squares.map((square) => (
        <Grid item xs={1.2} key={crypto.randomUUID()}>
          <Square />
        </Grid>
      ))}
    </Grid>
  );
}
