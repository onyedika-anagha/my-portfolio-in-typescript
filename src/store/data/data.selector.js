import { createSelector } from "reselect";

const selectDataReducer = (state) => state.data;

export const selectInfo = createSelector(
  [selectDataReducer],
  (data) => data.info
);
