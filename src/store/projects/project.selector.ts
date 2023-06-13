import { createSelector } from "reselect";
import { RootState } from "../store";

const selectProjectReducer = (state: RootState) => state.projects;

export const selectProject = createSelector([selectProjectReducer], (data) => ({
  projects: data.data,
  meta: data.meta,
  links: data.links,
}));
