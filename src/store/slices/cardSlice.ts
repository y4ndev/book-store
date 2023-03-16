import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CardSliceState {
  cardId: string;
}

const initialState: CardSliceState = {
  cardId: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardId: (state, action) => {
      state.cardId = action.payload;
    },
  },
});

export const selectCard = (state: RootState) => state.card;
// Action creators are generated for each case reducer function
export const { setCardId } = cardSlice.actions;

export default cardSlice.reducer;
