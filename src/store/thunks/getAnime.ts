import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAnimeBlock } from "@shared/constans/card/card";
import { AppDispatch, RootState } from "..";

const getAnimeThunk = createAsyncThunk<
  IAnimeBlock,
  string | null | undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("anime/fetchByAnime", async (slug, { getState }) => {
  if (!slug) throw new Error("Неправильно указана ссылка");
  const stateResult = await getState();
  const response = await stateResult.animeList.animePosters.find(
    (item) => item.slug === slug
  );
  if (!response) throw new Error("Такого аниме нет в базе");
  return (await response) as IAnimeBlock;
});

export default getAnimeThunk;
