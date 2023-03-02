import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataItems = createAsyncThunk("items/fetchDataItemsStatus", async (params) => {
  const { category, sortType, search, pagination } = params;
  const resp = await axios.get(
    `http://localhost:3001/book?${category}&_sort=${sortType}${search}${pagination}`
  );

  return resp.data;
});

export const fetchDataCard = createAsyncThunk("items/fetchDataCardStatus", async (id) => {
  const resp = await axios.get(`http://localhost:3001/book/${id}`);
  return resp.data;
});

const initialState = {
  dataItems: [],
  dataCard: [],
  status: "",
  loading: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataItems: (state, action) => {
      state.dataItems = action.payload;
    },
  },
  extraReducers: {
    [fetchDataItems.pending]: (state) => {
      state.status = "loading";
      state.dataItems = [];
      
    },

    [fetchDataItems.fulfilled]: (state, action) => {
      state.dataItems = action.payload;
      state.status = "success";
    
    },

    [fetchDataItems.rejected]: (state) => {
      state.dataItems = [];
      state.status = "error";
    },

    [fetchDataCard.pending]: (state) => {
      state.status = "loading";
      state.dataCard = [];
    },

    [fetchDataCard.fulfilled]: (state, action) => {
      state.dataCard = action.payload;
      state.status = "success";
    },

    [fetchDataCard.rejected]: (state) => {
      state.dataCard = [];
      state.status = "error";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataItems } = dataSlice.actions;

export default dataSlice.reducer;
