import { configureStore } from "@reduxjs/toolkit";
import animeListSlice from "./animeListSlice";

const store = configureStore({
  reducer: {
    animeList: animeListSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
