import { useEffect, useState } from 'react';
import { SWIPE_HINT_DURATION } from '../../../../variables/variables';
import styles from './SwipeHint.module.scss';

export function SwipeHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, SWIPE_HINT_DURATION);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.swipeHint}>
      <p>Swipe to navigate on mobile!</p>
      <div className={styles.swipeGesture}>👆👇👈👉</div>
    </div>
  );
}
