import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export type Goods = {
  id: number;
  title: string;
  imageUrl: string;
  author: string;
  price: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface DataSliceState {
  dataItems: Goods[];
  dataCard: Goods;
  status: string;
  loading: boolean;
}

export const fetchDataItems = createAsyncThunk(
  "items/fetchDataItemsStatus",
  async (params: Record<string, string>) => {
    const { category, sort, search, pagination } = params;
    const resp = await axios.get<Goods[]>(
      `https://63d6a236e60d5743697c6895.mockapi.io/items?${pagination}${category}&sortBy=${sort}&order=asc${search}`
    );

    return resp.data as Goods[];
  }
);

export const fetchDataCard = createAsyncThunk("items/fetchDataCardStatus", async (id: string) => {
  const resp = await axios.get<Goods>(`https://63d6a236e60d5743697c6895.mockapi.io/items/${id}`);
  return resp.data as Goods;
});

const initialState: DataSliceState = {
  dataItems: [],
  dataCard: {} as Goods,
  status: Status.LOADING,
  loading: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataItems: (state, action: PayloadAction<Goods[]>) => {
      state.dataItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchDataItems.pending, (state) => {
      state.status = Status.LOADING;
      state.dataItems = [];
    });
    builder.addCase(fetchDataItems.fulfilled, (state, action: PayloadAction<Goods[]>) => {
      state.dataItems = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDataItems.rejected, (state) => {
      state.dataItems = [];
      state.status = Status.ERROR;
    });

    builder.addCase(fetchDataCard.pending, (state) => {
      state.status = Status.LOADING;
      state.dataCard = {} as Goods;
    });
    builder.addCase(fetchDataCard.fulfilled, (state, action: PayloadAction<Goods>) => {
      state.dataCard = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDataCard.rejected, (state) => {
      state.dataCard = {} as Goods;
      state.status = Status.ERROR;
    });
  },
});

export const selectData = (state: RootState) => state.data;

// Action creators are generated for each case reducer function
export const { setDataItems } = dataSlice.actions;

export default dataSlice.reducer;
