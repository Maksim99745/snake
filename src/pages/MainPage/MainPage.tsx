import { Button, Typography } from '@mui/material';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { GameBoard } from './components/GameBoard/GameBoard/GameBoard';
import OpenRecordsButton from './components/OpenRecordsButton';
import { RecordsModal } from './components/RecordsModal/RecordsModal';
import { SwipeHint } from './components/SwipeHint/SwipeHint';
import { useActions } from './hooks/useActions';
import { useStartStopGame } from './hooks/useStartStop';

export default function MainPage() {
  const { score } = useSelector((state: RootState) => state.snake);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const { changeDirectionValue } = useActions();

  const { localIsGameOver, gameStatus, handleStartGame } = useStartStopGame();

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    changeDirectionValue(event.key);
  };

  return (
    <div
      ref={gameContainerRef}
      tabIndex={0}
      role="button"
      onKeyDownCapture={keyDownHandler}
      style={{ outline: 'none' }}
    >
      <SwipeHint />
      <Typography variant="h4" gutterBottom>
        Snake game
      </Typography>

      {!localIsGameOver && (
        <Typography variant="h5" gutterBottom>
          Current score: {score}
        </Typography>
      )}
      {localIsGameOver && (
        <Typography variant="h5" gutterBottom color="#E32636">
          Game over! Your final score: {score}
        </Typography>
      )}
      <RecordsModal openControl={OpenRecordsButton} />
      <div>
        <GameBoard />
      </div>
      <Button variant="contained" color="secondary" size="large" type="button" onClick={handleStartGame}>
        {gameStatus}
      </Button>
      <div />
    </div>
  );
}
