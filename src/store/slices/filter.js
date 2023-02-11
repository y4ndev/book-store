import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.value += action.payload;
    },
    sort: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filter, sort } = counterSlice.actions;

export default filterSlice.reducer;
