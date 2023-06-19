import { all, call } from "typed-redux-saga/macro";
import { dataSagas } from "./data/data.saga";
import { projectSagas } from "./projects/project.saga";

export function* rootSaga() {
  yield* all([call(dataSagas), call(projectSagas)]);
}
