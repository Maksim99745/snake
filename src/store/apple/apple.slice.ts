import { createSlice } from '@reduxjs/toolkit';
import { ItemCoordinate } from '../../models/ItemCoordinate';

const initialState: ItemCoordinate[] = [{ x: 5, y: 5 }];

export const appleSlice = createSlice({
  name: 'apple',
  initialState,
  reducers: {},
});

export const { actions, reducer } = appleSlice;
