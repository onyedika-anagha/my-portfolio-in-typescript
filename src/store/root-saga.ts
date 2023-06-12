import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/categories.saga";
import { dataSagas } from "./data/data.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(dataSagas)]);
}
