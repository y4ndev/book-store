import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ISort = {
  name: string;
  sortProps: string;
};

interface FilterSliceState {
  categoryId: number;
  categoryName: string;
  sortType: ISort;
  paginationValue: number;
}

const initialState: FilterSliceState = {
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
      state.paginationValue = 0;
    },
    setCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload;
    },
    setSortType: (state, action: PayloadAction<ISort>) => {
      state.sortType = action.payload;
    },
    setPaginationValue: (state, action: PayloadAction<number>) => {
      state.paginationValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setPaginationValue, setCategoryName } =
  filterSlice.actions;

export default filterSlice.reducer;
