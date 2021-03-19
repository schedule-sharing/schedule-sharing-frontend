import { AddMyScheduleFormData } from "../../store/reducers/scheduleReducer/myScheduleReducer";
import axios from "../../config/axios/axios";

const token = window.localStorage.getItem("access_token");

const getMyScheduleListApi = async (month: string) => {
  const result = await axios.get(`/myschedule/list/`, {
    params: {
      yearMonth: month
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return result.data._embedded?.myScheduleResponseList;
};

const addMyScheduleApi = async (newSchedule: AddMyScheduleFormData) => {
  const result = await axios.post("/myschedule", newSchedule, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const { data } = result;
  return data;
};

export { addMyScheduleApi, getMyScheduleListApi };
