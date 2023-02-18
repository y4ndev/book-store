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
    // addBasketItem: (state, action) => {
    //   state.basketItems.push(action.payload);
    //   state.totalPrice = state.basketItems.reduce((sum, obj) => {
    //     return Number(obj.price + sum);
    //   }, 0);

    // },
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBasketItem } = basketSlice.actions;

export default basketSlice.reducer;
