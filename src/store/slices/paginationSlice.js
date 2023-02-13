import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paginationValue: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,

  reducers: {
    setPaginationValue: (state, action) => {
      state.paginationValue = action.payload;
    },
  },
});

export const { setPaginationValue } = paginationSlice.actions;
export default paginationSlice.reducer;
