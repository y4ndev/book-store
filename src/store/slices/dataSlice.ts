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
      `http://localhost:3001/book?${category}&_sort=${sort}${search}${pagination}`
    );

    return resp.data as Goods[];
  }
);

export const fetchDataCard = createAsyncThunk("items/fetchDataCardStatus", async (id: string) => {
  const resp = await axios.get<Goods>(`http://localhost:3001/book/${id}`);
  return resp.data as Goods;
});

const initialState: DataSliceState = {
  dataItems: [],
  dataCard: {} as Goods,
  status: "",
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
      state.status = "loading";
      state.dataItems = [];
    });
    builder.addCase(fetchDataItems.fulfilled, (state, action: PayloadAction<Goods[]>) => {
      state.dataItems = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchDataItems.rejected, (state) => {
      state.dataItems = [];
      state.status = "error";
    });

    builder.addCase(fetchDataCard.pending, (state) => {
      state.status = "loading";
      state.dataCard = {} as Goods;
    });
    builder.addCase(fetchDataCard.fulfilled, (state, action: PayloadAction<Goods>) => {
      state.dataCard = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchDataCard.rejected, (state) => {
      state.dataCard = {} as Goods;
      state.status = "error";
    });
  },
});

export const selectData = (state: RootState) => state.data;

// Action creators are generated for each case reducer function
export const { setDataItems } = dataSlice.actions;

export default dataSlice.reducer;
