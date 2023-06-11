import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import { themeReducer } from "./theme/theme.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  theme: themeReducer,
});
