import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as appleActions } from '../../../store/apple/apple.slice';
import { actions as snakeActions } from '../../../store/snake/snake.slice';

const rootActions = { ...snakeActions, ...appleActions };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
