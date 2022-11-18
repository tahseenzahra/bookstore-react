import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const options = {
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ('Under Construction'),
  },
};
const categoriesReducer = createSlice(options);

export const { checkStatus } = categoriesReducer.actions;
export default categoriesReducer.reducer;
