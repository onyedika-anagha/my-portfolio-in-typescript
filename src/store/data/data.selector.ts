import { createSelector } from "reselect";
import { RootState } from "../store";

const selectDataReducer = (state: RootState) => state.data;

export const selectInfo = createSelector([selectDataReducer], (data) =>
  data.info == null
    ? {
        user: null,
        socials: null,
        services: null,
        stack: null,
        education: null,
        experience: null,
      }
    : data.info
);
