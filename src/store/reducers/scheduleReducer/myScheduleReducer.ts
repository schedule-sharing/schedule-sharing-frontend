import { addMyScheduleApi } from "../../../api/mySheduleAPI";

// state
export interface AddMyScheduleFormData {
  name: string;
  contents: string;
  scheduleStartDate: number;
  scheduleEndDate: number;
}

export interface MySchedule {
  scheduleId: number;
  memberId: number;
  contents: string;
  name: string;
  scheduleStartDate: number;
  scheduleEndDate: number;
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
const ADD_MY_SCHEDULE = "myschedule/add";
const UPDATE_MY_SCHEDULE = "myschedule/update";

// action creators
type AddMyScheduleAction = ReturnType<typeof addMyScheduleAction>;
type UpdateMyScheduleAction = ReturnType<typeof updateMyScheduleAction>;
type MyScheduleActions = AddMyScheduleAction | UpdateMyScheduleAction;

export const addMyScheduleAction = (newSchedule: MySchedule) => ({
  type: ADD_MY_SCHEDULE,
  payload: newSchedule
});

export const updateMyScheduleAction = (newSchedule: MySchedule) => ({
  type: UPDATE_MY_SCHEDULE,
  payload: newSchedule
});

// reducer
export default (state = initialState, action: MyScheduleActions) => {
  const copied = { ...state };
  switch (action.type) {
    case ADD_MY_SCHEDULE: {
      const newScheduleList = copied.myScheduleList?.concat(action.payload);
      return newScheduleList || null;
    }
    case UPDATE_MY_SCHEDULE: {
      return copied || null;
    }
    default:
      return null;
  }
};
