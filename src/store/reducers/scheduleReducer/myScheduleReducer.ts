import { Dispatch } from "react";
import { addMyScheduleApi, deleteMyScheduleApi, getMyScheduleListApi, updateMyScheduleApi } from "../../../api/schedule/myschedule";

// response type
interface DeleteSuccess {
  success: boolean;
  message: string;
  id: number;
}

// state
export interface MyScheduleFormData {
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
  loading: boolean;
  myScheduleList: MySchedule[];
}

const initialState: MyScheduleState = {
  loading: false,
  myScheduleList: []
};

// actions
const ADD_MY_SCHEDULE = "myschedule/add" as const;
const LOADING = "myschedule/loading" as const;
const UPDATE_MY_SCHEDULE = "myschedule/update" as const;
const GET_MY_SCHEDULE_LIST = "myschedule/getlist" as const;
const DELETE_MY_SCHEDULE = "myschedule/delete" as const;

// action creators
export const loadingAction = () => ({
  type: LOADING
});

export const getMyScheduleListAction = (scheduleList: MySchedule[]) => ({
  type: GET_MY_SCHEDULE_LIST,
  payload: scheduleList
});

export const addMyScheduleAction = (newSchedule: MySchedule) => ({
  type: ADD_MY_SCHEDULE,
  payload: newSchedule
});

export const updateMyScheduleAction = (newSchedule: MySchedule) => ({
  type: UPDATE_MY_SCHEDULE,
  payload: newSchedule
});

export const deleteMyScheduleAction = (successMessage: DeleteSuccess) => ({
  type: DELETE_MY_SCHEDULE,
  payload: successMessage
});

export const getMyScheduleListActionAsync = (month: string) => async (dispatch: Dispatch<GetMyScheduleListAction | LoadingAction>) => {
  dispatch(loadingAction());
  try {
    const payload = await getMyScheduleListApi(month);
    dispatch(getMyScheduleListAction(payload as MySchedule[]));
  } catch (e) {
    console.log(e);
  }
  dispatch(loadingAction());
};

export const addMyScheduleActionAsync = (newSchedule: MyScheduleFormData) => async (dispatch: Dispatch<AddMyScheduleAction | LoadingAction>) => {
  dispatch(loadingAction());
  try {
    const payload = await addMyScheduleApi(newSchedule);
    const newPayload = {
      ...payload,
      startDate: payload.scheduleStartDate,
      endDate: payload.scheduleEndDate
    };
    dispatch(addMyScheduleAction(newPayload));
  } catch (e) {
    console.log(e);
  }
  dispatch(loadingAction());
};

export const updateMyScheduleActionAsync = (id: number, newSchedule: MyScheduleFormData) => async (
  dispatch: Dispatch<UpdateMyScheduleAction | LoadingAction>
) => {
  dispatch(loadingAction());
  try {
    const payload = await updateMyScheduleApi(id, newSchedule);
    const newPayload = {
      ...payload,
      startDate: payload.scheduleStartDate,
      endDate: payload.scheduleEndDate
    };
    dispatch(updateMyScheduleAction(newPayload));
  } catch (e) {
    console.log(e);
  }
  dispatch(loadingAction());
};

export const deleteMyScheduleActionAsync = (id: number) => async (dispatch: Dispatch<DeleteMyScheduleAction | LoadingAction>) => {
  dispatch(loadingAction());
  try {
    const successMessage = await deleteMyScheduleApi(id);
    dispatch(deleteMyScheduleAction({ ...successMessage, id }));
  } catch (e) {
    console.log(e);
  }
  dispatch(loadingAction());
};

type AddMyScheduleAction = ReturnType<typeof addMyScheduleAction>;
type UpdateMyScheduleAction = ReturnType<typeof updateMyScheduleAction>;
type GetMyScheduleListAction = ReturnType<typeof getMyScheduleListAction>;
type DeleteMyScheduleAction = ReturnType<typeof deleteMyScheduleAction>;
type LoadingAction = ReturnType<typeof loadingAction>;
type MyScheduleActions = AddMyScheduleAction | UpdateMyScheduleAction | GetMyScheduleListAction | DeleteMyScheduleAction | LoadingAction;

// reducer
export default (state = initialState, action: MyScheduleActions) => {
  const copied = {
    loading: state.loading,
    myScheduleList: [...state.myScheduleList]
  };
  switch (action.type) {
    case LOADING: {
      copied.loading = !copied.loading;
      return copied;
    }
    case ADD_MY_SCHEDULE: {
      return {
        ...copied,
        myScheduleList: [...copied.myScheduleList, action.payload]
      };
    }
    case UPDATE_MY_SCHEDULE: {
      copied.myScheduleList = copied.myScheduleList.filter((c) => c.myScheduleId !== action.payload.myScheduleId);
      return {
        ...copied,
        myScheduleList: [...copied.myScheduleList, action.payload]
      };
    }
    case GET_MY_SCHEDULE_LIST: {
      copied.myScheduleList.splice(0, copied.myScheduleList.length);
      copied.myScheduleList = JSON.parse(JSON.stringify(action.payload));
      return copied;
    }
    case DELETE_MY_SCHEDULE: {
      copied.myScheduleList = copied.myScheduleList.filter((schedule) => schedule.myScheduleId !== action.payload.id);
      return copied;
    }
    default:
      return copied;
  }
};
