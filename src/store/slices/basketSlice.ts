import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBasketLS } from "../../utils/LocalStorage";
import { RootState } from "../store";

export type IBasketItem = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  price: number;
  count: number;
};

interface BasketSliceState {
  basketItems: IBasketItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: BasketSliceState = {
  basketItems: getBasketLS(),
  totalPrice: 0,
  totalCount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<IBasketItem>) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.count) {
        findItem.count++;
      } else {
        state.basketItems.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.basketItems.reduce((sum, obj) => {
        return Number(obj.price * obj.count + sum);
      }, 0);
    },

    plusBasketItem: (state, action: PayloadAction<number>) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
    },

    minusBasketItem: (state, action: PayloadAction<number>) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
    },
    removeBasketItem: (state, action) => {
      state.basketItems = state.basketItems.filter((obj) => obj.id !== action.payload);
    },

    clearBasket: (state) => {
      state.basketItems = [];
    },
  },
});

export const selectBasket = (state: RootState) => state.basket;

// Action creators are generated for each case reducer function
export const { addBasketItem, clearBasket, plusBasketItem, minusBasketItem, removeBasketItem } =
  basketSlice.actions;

export default basketSlice.reducer;
