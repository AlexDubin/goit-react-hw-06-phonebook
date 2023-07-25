import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filtered',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
