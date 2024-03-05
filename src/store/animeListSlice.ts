import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAnimeBlock, animeList } from "@shared/constans/card/card";
import getAnimeThunk from "./thunks/getAnime";

type dataType = null | IAnimeBlock | undefined;
interface IAnimeContent {
  start: boolean;
  finish: boolean;
  error: boolean;
  errorMessage: null | string | undefined;
  data: dataType;
}

interface IInitialState {
  animePosters: IAnimeBlock[];
  animeContent: IAnimeContent;
}

const initialAnimeContent: IAnimeContent = {
  start: false,
  finish: false,
  error: false,
  errorMessage: null,
  data: null,
};

const initialState: IInitialState = {
  animePosters: animeList,
  animeContent: initialAnimeContent,
};

const animeListSlice = createSlice({
  name: "animeList",
  initialState,
  reducers: {
    setAnime: (state, action: PayloadAction<Pick<IAnimeContent, "data">>) => {
      state.animeContent.data = action.payload.data;
    },
    setStart: (state, action: PayloadAction<Pick<IAnimeContent, "start">>) => {
      state.animeContent.start = action.payload.start;
    },
    setFinish: (
      state,
      action: PayloadAction<Pick<IAnimeContent, "finish">>
    ) => {
      state.animeContent.finish = action.payload.finish;
    },
    setError: (
      state,
      action: PayloadAction<Pick<IAnimeContent, "errorMessage">>
    ) => {
      state.animeContent.error = true;
      state.animeContent.errorMessage = action.payload.errorMessage;
    },
    resetAnimeContent: (state) => {
      state.animeContent = initialState.animeContent;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAnimeThunk.pending, (state) => {
      state.animeContent.start = true;
    });
    builder.addCase(getAnimeThunk.fulfilled, (state, action) => {
      state.animeContent.data = action.payload;
      state.animeContent.finish = true;
    });
    builder.addCase(getAnimeThunk.rejected, (state, action) => {
      state.animeContent.data = null;
      state.animeContent.error = true;
      state.animeContent.errorMessage = action.error.message;
      state.animeContent.finish = true;
    });
  },
});
export const { setAnime, setStart, setError, setFinish, resetAnimeContent } =
  animeListSlice.actions;
export default animeListSlice.reducer;
