import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { SetData, setData } from "./data.actions";
import { setDataInfo } from "./data.slice";
import { DATA_ACTION_TYPES } from "./data.types";
import { hostURL } from "../../utils/initial-state/states";

const getData = async () => {
  try {
    const res = await fetch(`${hostURL}/api/get/all`);
    const data = await res.json();
    if (data.success != null) {
      if (data.success) return await data.data;
    }
  } catch (error) {
    console.error(error as Error);
  }
};

export function* fetchData() {
  try {
    const data = yield* call(getData);
    if (!data) return;
    yield* put(setData(data));
  } catch (error) {
    console.log(error as Error);
  }
}
export function* setInfoData({ payload }: SetData) {
  try {
    yield* put(setDataInfo(payload));
  } catch (error) {
    console.log(error as Error);
  }
}
export function* onFetchData() {
  yield* takeLatest(DATA_ACTION_TYPES.FETCH_DATA, fetchData);
}

export function* onSetData() {
  yield* takeLatest(DATA_ACTION_TYPES.SET_DATA, setInfoData);
}

export function* dataSagas() {
  yield* all([call(onFetchData), call(onSetData)]);
}
