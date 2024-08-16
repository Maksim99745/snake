import { useGameStatus } from './hooks/useGameStatus';

export default function MainPage() {
  const { gameStatus, handleGameStatus } = useGameStatus();
  return (
    <div>
      <h2>Snake game</h2>
      <button type="button" onClick={handleGameStatus}>
        {gameStatus}
      </button>
    </div>
  );
}
