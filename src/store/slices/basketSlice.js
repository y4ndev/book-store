import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
  totalPrice: 0,
  totalCount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketItem: (state, action) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.basketItems.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.basketItems.reduce((sum, obj) => {
        return Number(obj.price * obj.count + sum);
      }, 0);
      console.log(...state.basketItems);
    },

    plusBasketItem: (state, action) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload);
      findItem.count++;
    },

    minusBasketItem: (state, action) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload);
      if (findItem.count > 1) {
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

// Action creators are generated for each case reducer function
export const { addBasketItem, clearBasket, plusBasketItem, minusBasketItem, removeBasketItem } =
  basketSlice.actions;

export default basketSlice.reducer;
