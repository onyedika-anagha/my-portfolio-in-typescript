import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { DATA_ACTION_TYPES, DataTypes } from "./data.types";

export type FetchData = Action<DATA_ACTION_TYPES.FETCH_DATA>;

export type SetData = ActionWithPayload<DATA_ACTION_TYPES.SET_DATA, DataTypes>;

export const fetchData = withMatcher(
  (): FetchData => createAction(DATA_ACTION_TYPES.FETCH_DATA)
);
// export const fetchData = () => createAction(DATA_ACTION_TYPES.FETCH_DATA);

export const setData = withMatcher(
  (data: DataTypes): SetData => createAction(DATA_ACTION_TYPES.SET_DATA, data)
);
