import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* categoriesSaga() {}
