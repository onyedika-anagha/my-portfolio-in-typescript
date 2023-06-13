import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { PROJECT_ACTION_TYPES, ProjectData } from "./project.types";

export type FetchData = Action<PROJECT_ACTION_TYPES.FETCH_DATA>;

export type SetData = ActionWithPayload<
  PROJECT_ACTION_TYPES.SET_DATA,
  ProjectData
>;

export const fetchProjectData = withMatcher(
  (): FetchData => createAction(PROJECT_ACTION_TYPES.FETCH_DATA)
);
// export const fetchData = () => createAction(PROJECT_ACTION_TYPES.FETCH_DATA);

export const setProjectData = withMatcher(
  (data: ProjectData): SetData =>
    createAction(PROJECT_ACTION_TYPES.SET_DATA, data)
);
