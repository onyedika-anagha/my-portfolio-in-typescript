import { createSlice } from "@reduxjs/toolkit";
import { Links, Meta, Project } from "./project.types";

export type PROJECTSTATE = {
  readonly data: Project[] | null;
  readonly links: Links | null;
  readonly meta: Meta | null;
  readonly isLoading: boolean;
};
const INITIAL_STATE: PROJECTSTATE = {
  data: null,
  links: null,
  meta: null,
  isLoading: true,
};
const projectSlice = createSlice({
  name: "data",
  initialState: INITIAL_STATE,
  reducers: {
    setProject(state, action) {
      state.data = action.payload.data;
      state.links = action.payload.links;
      state.meta = action.payload.meta;
      state.isLoading = false;
    },
  },
});

export const { setProject } = projectSlice.actions;
export default projectSlice;
