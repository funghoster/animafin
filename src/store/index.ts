import { configureStore } from "@reduxjs/toolkit";
import animeListSlice from "./animeListSlice";
import globalSlice from "./globalSlice";

const store = configureStore({
  reducer: {
    animeList: animeListSlice,
    globalStore: globalSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
