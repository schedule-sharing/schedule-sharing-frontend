// state
export interface MySchedule {
  scheduleId: number;
  memberId: number;
  contents: string;
  name: string;
  scheduleStartDate: Date;
  scheduleEndDate: Date;
}

export interface ClubSchedule {
  clubScheduleId: number;
  clubId: number;
  memberId: number;
  contents: string;
  name: string;
  scheduleStartDate: Date;
  scheduleEndDate: Date;
}

export interface ScheduleState {
  mySchedule: MySchedule | null;
  myScheduleList: MySchedule[];
  clubSchedule: ClubSchedule | null;
  clubScheduleList: ClubSchedule[];
}

const initialState: ScheduleState = {
  mySchedule: null,
  myScheduleList: [],
  clubSchedule: null,
  clubScheduleList: []
};

// actions
const ADD_MY_SCHEDULE = "myschedule/add";
const UPDATE_MY_SCHEDULE = "myschedule/update";

// action creators
type AddMyScheduleAction = ReturnType<typeof addMyScheduleAction>;
type UpdateMyScheduleAction = ReturnType<typeof updateMySchedule>;
type MyScheduleActions = AddMyScheduleAction | UpdateMyScheduleAction;

export const addMyScheduleAction = (newSchedule: MySchedule) => ({
  type: ADD_MY_SCHEDULE,
  payload: newSchedule
});

export const updateMySchedule = (newSchedule: MySchedule) => ({
  type: UPDATE_MY_SCHEDULE,
  payload: newSchedule
});

// reducer
export default (state = initialState, action: MyScheduleActions) => {
  switch (action.type) {
    case ADD_MY_SCHEDULE: {
      return [...state.myScheduleList, action.payload];
    }
    case UPDATE_MY_SCHEDULE: {
      return [...state.myScheduleList, action.payload];
    }
    default:
      return {};
  }
};
