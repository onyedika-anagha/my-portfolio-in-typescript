import { createSlice } from "@reduxjs/toolkit";
import { DataTypes } from "./data.types";

export type DataState = {
  readonly info: DataTypes | null;
  readonly isLoading: boolean;
};

const INITIAL_STATE: DataState = { info: null, isLoading: false };
const siteDataSlice = createSlice({
  name: "data",
  initialState: INITIAL_STATE,
  reducers: {
    setDataInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const { setDataInfo } = siteDataSlice.actions;
export default siteDataSlice;
