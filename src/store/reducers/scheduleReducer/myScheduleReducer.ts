import { addMyScheduleApi } from "../../../api/schedule/myschedule";

// state
export interface AddMyScheduleFormData {
  name: string;
  contents: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
}

export interface MySchedule {
  scheduleId: number;
  memberId: number;
  contents: string;
  name: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
}

export interface MyScheduleState {
  mySchedule: MySchedule | null;
  myScheduleList: MySchedule[];
}

const initialState: MyScheduleState = {
  mySchedule: null,
  myScheduleList: []
};

// actions
const ADD_MY_SCHEDULE = "myschedule/add" as const;
const UPDATE_MY_SCHEDULE = "myschedule/update";
const GET_MY_SCHEDULE_LIST = "myschedule/getlist";

// action creators
type AddMyScheduleAction = ReturnType<typeof addMyScheduleAction>;
type UpdateMyScheduleAction = ReturnType<typeof updateMyScheduleAction>;
type GetMyScheduleListAction = ReturnType<typeof getMyScheduleListAction>;
type MyScheduleActions =
  | AddMyScheduleAction
  | UpdateMyScheduleAction
  | GetMyScheduleListAction;

export const addMyScheduleAction = (newSchedule: AddMyScheduleFormData) => ({
  type: ADD_MY_SCHEDULE,
  payload: newSchedule
});

export const updateMyScheduleAction = (newSchedule: MySchedule) => ({
  type: UPDATE_MY_SCHEDULE,
  payload: newSchedule
});

export const getMyScheduleListAction = (month: string) => ({
  type: GET_MY_SCHEDULE_LIST,
  payload: month
});

// reducer
export default async (state = initialState, action: MyScheduleActions) => {
  const copied = { ...state };
  switch (action.type) {
    case ADD_MY_SCHEDULE: {
      const data = await addMyScheduleApi(
        action.payload as AddMyScheduleFormData
      );
      return data;
    }
    case UPDATE_MY_SCHEDULE: {
      return copied || null;
    }
    case GET_MY_SCHEDULE_LIST: {
      return null;
    }
    default:
      return null;
  }
};
