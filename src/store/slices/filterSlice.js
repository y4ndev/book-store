import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortType: {
    name: "Название",
    sortProps: "title",
  },
  paginationValue: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
      state.paginationValue = 0;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setPaginationValue: (state, action) => {
      state.paginationValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setPaginationValue } = filterSlice.actions;

export default filterSlice.reducer;
