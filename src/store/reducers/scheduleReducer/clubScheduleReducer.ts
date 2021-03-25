import { Dispatch } from "react";
import {
  getClubScheduleListApi,
  addClubScheduleApi
} from "../../../api/schedule/clubSchedule";

// state
export interface AddClubScheduleFormData {
  clubId: number;
  name: string;
  contents: string;
  startMeetingDate: string;
  endMeetingDate: string;
}

export interface ClubSchedule {
  id: number;
  name: string;
  contents: string;
  startMeetingDate: string;
  endMeetingDate: string;
  memberName: string;
  memberEmail: string;
}

export interface ClubScheduleState {
  clubScheduleList: ClubSchedule[];
}

const initialState: ClubScheduleState = {
  clubScheduleList: []
};

// actions

const ADD_CLUB_SCHEDULE = "clubSchedule/add";
const UPDATE_CLUB_SCHEDULE = "clubSchedule/update";
const GET_CLUB_SCHEDULE_LIST = "clubSchedule/getlist";
const GET_CLUB_SCHEDULE_LIST_FAILED = "clubSchedule/getlist/FAILED";

// action creators

export const addClubScheduleAction = (
  newClubSchedule: AddClubScheduleFormData
) => ({
  type: ADD_CLUB_SCHEDULE,
  payload: newClubSchedule
});

export const getClubScheduleListAction = (
  newClubScheduleList: ClubSchedule[]
) => ({
  type: GET_CLUB_SCHEDULE_LIST,
  payload: newClubScheduleList
});

export const getClubScheduleListActionAsync = (
  clubId: number,
  yearMonth: number
) => async (dispatch: Dispatch<GetClubScheduleListAction>) => {
  try {
    const payload = await getClubScheduleListApi(clubId, yearMonth);
    dispatch(getClubScheduleListAction(payload));
  } catch (e) {
    console.log(e);
  }
};

type AddClubScheduleAction = ReturnType<typeof addClubScheduleAction>;
// type UpdateClubScheduleAction = ReturnType<typeof updateClubScheduleAction>;
type GetClubScheduleListAction = ReturnType<typeof getClubScheduleListAction>;
type ClubScheduleActions =
  | AddClubScheduleAction
  // | UpdateClubScheduleAction
  | GetClubScheduleListAction;

// reducers

export default (state = initialState, action: ClubScheduleActions) => {
  const { ...copied } = state;
  switch (action.type) {
    case GET_CLUB_SCHEDULE_LIST: {
      copied.clubScheduleList = action.payload as ClubSchedule[];
      return copied;
    }
    default:
      return copied;
  }
};
