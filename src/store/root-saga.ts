import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/categories.saga";
import { dataSagas } from "./data/data.saga";
import { projectSagas } from "./projects/project.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(dataSagas), call(projectSagas)]);
}
