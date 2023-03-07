import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  categoryName: "",
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
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
      console.log(action.payload);
    },
    setPaginationValue: (state, action) => {
      state.paginationValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setPaginationValue, setCategoryName } =
  filterSlice.actions;

export default filterSlice.reducer;
