import {
  addMyScheduleApi,
  getMyScheduleListApi
} from "../../../api/schedule/myschedule";

// state
export interface AddMyScheduleFormData {
  name: string;
  contents: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
}

export interface MySchedule {
  myScheduleId: number;
  contents: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface MyScheduleState {
  myScheduleList: MySchedule[];
}

const initialState: MyScheduleState = {
  myScheduleList: []
};

// actions
const ADD_MY_SCHEDULE = "myschedule/add";
const UPDATE_MY_SCHEDULE = "myschedule/update";
const GET_MY_SCHEDULE_LIST = "myschedule/getlist";
const GET_MY_SCHEDULE_LIST_FAILED = "myschedule/getlist/FAILED";

// action creators
export const addMyScheduleAction = (newSchedule: MySchedule) => ({
  type: ADD_MY_SCHEDULE,
  payload: newSchedule
});

export const addMyScheduleActionAsync = (
  newSchedule: AddMyScheduleFormData
) => async (dispatch: any) => {
  try {
    const payload = await addMyScheduleApi(newSchedule);
    dispatch(addMyScheduleAction(payload));
  } catch (e) {
    console.log(e);
  }
};

export const updateMyScheduleAction = (newSchedule: MySchedule) => ({
  type: UPDATE_MY_SCHEDULE,
  payload: newSchedule
});

// export const getMyScheduleList = (month: string) => ({
//   type: GET_MY_SCHEDULE_LIST,
//   payload: month
// });

export const getMyScheduleListAction = (scheduleList: MySchedule[]) => ({
  type: GET_MY_SCHEDULE_LIST,
  payload: scheduleList
});

export const getMyScheduleListActionAsync = (month: string) => async (
  dispatch: any
) => {
  try {
    const payload = await getMyScheduleListApi(month);
    dispatch(getMyScheduleListAction(payload as MySchedule[]));
  } catch (e) {
    dispatch({ type: GET_MY_SCHEDULE_LIST_FAILED });
  }
};

type AddMyScheduleAction = ReturnType<typeof addMyScheduleAction>;
type UpdateMyScheduleAction = ReturnType<typeof updateMyScheduleAction>;
type GetMyScheduleListAction = ReturnType<typeof getMyScheduleListAction>;
type MyScheduleActions =
  | AddMyScheduleAction
  | UpdateMyScheduleAction
  | GetMyScheduleListAction;

// reducer
export default (state = initialState, action: MyScheduleActions) => {
  const copied = { myScheduleList: [...state.myScheduleList] };
  switch (action.type) {
    case ADD_MY_SCHEDULE: {
      return copied.myScheduleList.concat(action.payload);
    }
    case UPDATE_MY_SCHEDULE: {
      return copied || null;
    }
    case GET_MY_SCHEDULE_LIST: {
      copied.myScheduleList = action.payload as MySchedule[];
      return copied;
    }
    default:
      return copied;
  }
};
