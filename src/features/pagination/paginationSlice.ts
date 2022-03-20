import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  initialState: {
    skip: 0,
    take: 10,
    hasNext: true,
  },
  name: 'pagination',
  reducers: {
    setSkip: (state, action) => ({ ...state, skip: action.payload }),
    setState: (state, action) => ({ ...state, take: action.payload }),
    setHasNext: (state, action) => ({ ...state, hasNext: action.payload }),
  },
});

export const { setSkip, setState, setHasNext } = paginationSlice.actions;

export default paginationSlice.reducer;
