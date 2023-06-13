import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { SetData, setProjectData } from "./project.actions";
import { setProject } from "./project.slice";
import { PROJECT_ACTION_TYPES } from "./project.types";
import { hostURL } from "../../utils/initial-state/states";

const getData = async () => {
  try {
    const res = await fetch(`${hostURL}/api/get/projects`);
    const data = await res.json();
    if (data.data != null) {
      return await data;
    }
  } catch (error) {
    console.error(error as Error);
  }
};

export function* fetchData() {
  try {
    const data = yield* call(getData);
    // console.log("data", data);

    if (!data) return;
    yield* put(setProjectData(data));
  } catch (error) {
    console.log(error as Error);
  }
}
export function* setInfoData({ payload }: SetData) {
  try {
    // console.log(payload);

    yield* put(setProject(payload));
  } catch (error) {
    console.log(error as Error);
  }
}
export function* onFetchData() {
  yield* takeLatest(PROJECT_ACTION_TYPES.FETCH_DATA, fetchData);
}

export function* onSetData() {
  yield* takeLatest(PROJECT_ACTION_TYPES.SET_DATA, setInfoData);
}

export function* projectSagas() {
  yield* all([call(onFetchData), call(onSetData)]);
}
