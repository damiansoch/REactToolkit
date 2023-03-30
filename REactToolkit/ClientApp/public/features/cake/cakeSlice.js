import { createSlice } from '@reduxjs/toolkit';

const initialState = { numOfCakes: 10 };

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

const { actions, reducer } = cakeSlice;

export default reducer;
export const { ordered, restocked } = actions;
