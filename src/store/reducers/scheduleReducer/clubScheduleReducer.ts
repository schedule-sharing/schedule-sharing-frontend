import { Dispatch } from "react";
import { addClubScheduleApi, getClubScheduleListApi, updateClubScheduleApi } from "../../../api/schedule/clubSchedule";

// state
export interface AddClubScheduleFormData {
  clubId: number;
  name: string;
  contents: string;
  startMeetingDate: string;
  endMeetingDate: string;
}

export interface UpdateClubScheduleFormData {
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
  loading: boolean;
  clubScheduleList: ClubSchedule[];
}

const initialState: ClubScheduleState = {
  loading: false,
  clubScheduleList: []
};

// actions

const ADD_CLUB_SCHEDULE = "clubSchedule/add" as const;
const UPDATE_CLUB_SCHEDULE = "clubSchedule/update" as const;
const GET_CLUB_SCHEDULE_LIST = "clubSchedule/getlist" as const;
const DELETE_CLUB_SCHEDULE = "clubSchedule/delete" as const;
const LOADING = "clubSchedule/loading" as const;

// action creators

export const loadingAction = () => ({
  type: LOADING
});

export const addClubScheduleAction = (newClubSchedule: ClubSchedule) => ({
  type: ADD_CLUB_SCHEDULE,
  payload: newClubSchedule
});

export const getClubScheduleListAction = (newClubScheduleList: ClubSchedule[]) => ({
  type: GET_CLUB_SCHEDULE_LIST,
  payload: newClubScheduleList
});

export const updateClubScheduleAction = (newClubSchedule: ClubSchedule) => ({
  type: UPDATE_CLUB_SCHEDULE,
  payload: newClubSchedule
});

export const deleteClubScheduleAction = () => ({
  type: DELETE_CLUB_SCHEDULE
});

export const getClubScheduleListActionAsync = (clubId: number, yearMonth: string) => async (
  dispatch: Dispatch<GetClubScheduleListAction | LoadingAction>
) => {
  dispatch(loadingAction());
  try {
    const payload = await getClubScheduleListApi(clubId, yearMonth);
    dispatch(getClubScheduleListAction(payload));
  } catch (e) {
    console.log(e);
  }
  dispatch(loadingAction());
};

export const addClubScheduleActionAsync = (newSchedule: AddClubScheduleFormData) => async (
  dispatch: Dispatch<AddClubScheduleAction | LoadingAction>
) => {
  dispatch(loadingAction());
  try {
    const payload = await addClubScheduleApi(newSchedule);
    dispatch(addClubScheduleAction(payload));
  } catch (e) {
    console.error(e);
  }
  dispatch(loadingAction());
};

export const updateClubScheduleActionAsync = (id: number, newSchedule: UpdateClubScheduleFormData) => async (
  dispatch: Dispatch<UpdateClubScheduleAction | LoadingAction>
) => {
  dispatch(loadingAction());
  try {
    const payload = await updateClubScheduleApi(id, newSchedule);
    dispatch(updateClubScheduleAction(payload));
  } catch (e) {
    console.error(e);
  }
  dispatch(loadingAction());
};

export const deleteClubScheduleActionAsync = (id: number) => async (dispatch: Dispatch<DeleteClubScheduleAction | LoadingAction>) => {
  dispatch(loadingAction());
  try {
    dispatch(deleteClubScheduleAction());
  } catch (e) {
    console.error(e);
  }
  dispatch(loadingAction());
};

type LoadingAction = ReturnType<typeof loadingAction>;
type GetClubScheduleListAction = ReturnType<typeof getClubScheduleListAction>;
type AddClubScheduleAction = ReturnType<typeof addClubScheduleAction>;
type UpdateClubScheduleAction = ReturnType<typeof updateClubScheduleAction>;
type DeleteClubScheduleAction = ReturnType<typeof deleteClubScheduleAction>;
type ClubScheduleActions = AddClubScheduleAction | UpdateClubScheduleAction | GetClubScheduleListAction | DeleteClubScheduleAction | LoadingAction;

// reducers

export default (state = initialState, action: ClubScheduleActions) => {
  const copied = {
    loading: state.loading,
    clubScheduleList: [...state.clubScheduleList]
  };
  switch (action.type) {
    case LOADING: {
      copied.loading = !copied.loading;
      return copied;
    }
    case GET_CLUB_SCHEDULE_LIST: {
      copied.clubScheduleList.splice(0, copied.clubScheduleList.length);
      copied.clubScheduleList = copied.clubScheduleList.concat(action.payload as ClubSchedule[]);
      return copied;
    }
    case ADD_CLUB_SCHEDULE: {
      return {
        ...copied,
        clubScheduleList: [...copied.clubScheduleList, action.payload]
      };
    }
    case UPDATE_CLUB_SCHEDULE: {
      copied.clubScheduleList = copied.clubScheduleList.filter((c) => c.id !== action.payload.id);
      return {
        ...copied,
        clubScheduleList: [...copied.clubScheduleList, action.payload]
      };
    }
    case DELETE_CLUB_SCHEDULE: {
      return copied;
    }
    default:
      return copied;
  }
};
