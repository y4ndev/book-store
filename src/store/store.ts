import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "./slices/filterSlice";
import search from "./slices/searchSlice";
import basket from "./slices/basketSlice";
import card from "./slices/cardSlice";
import data from "./slices/dataSlice";

export const store = configureStore({
  reducer: { filter, search, basket, card, data },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
