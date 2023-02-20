import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardId: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardId: (state, action) => {
      state.cardId = action.payload;
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCardId } = cardSlice.actions;

export default cardSlice.reducer;
