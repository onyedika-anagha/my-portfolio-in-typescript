import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme.reducer";
import siteDataSlice from "./data/data.slice";
import projectSlice from "./projects/project.slice";

export const rootReducer = combineReducers({
  theme: themeReducer,
  data: siteDataSlice.reducer,
  projects: projectSlice.reducer,
});
