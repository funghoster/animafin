import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface globalState {
  menuActive: boolean;
}

const initialState: globalState = {
  menuActive: false,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    switchMenu: (state, action: PayloadAction<boolean>) => {
      state.menuActive = action.payload;
    },
  },
});
export const { switchMenu } = globalSlice.actions;
export default globalSlice.reducer;
