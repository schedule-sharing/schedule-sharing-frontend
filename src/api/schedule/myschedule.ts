import { MyScheduleFormData } from "../../store/reducers/scheduleReducer/myScheduleReducer";
import axios from "../../config/axios/axios";

const getMyScheduleListApi = async (month: string) => {
  const result = await axios.get(`/myschedule/list/`, {
    params: {
      yearMonth: month
    }
  });
  return result.data._embedded?.myScheduleResponseList;
};

const addMyScheduleApi = async (newSchedule: MyScheduleFormData) => {
  const result = await axios.post("/myschedule", newSchedule);
  const { data } = result;
  return data;
};

const updateMyScheduleApi = async (
  id: number,
  newSchedule: MyScheduleFormData
) => {
  const result = await axios.put(`/myschedule/${id}`, newSchedule);
  return result.data;
};

const deleteMyScheduleApi = async (id: number) => {
  const result = await axios.delete(`/myschedule/${id}`);
  return result.data;
};

export {
  addMyScheduleApi,
  getMyScheduleListApi,
  deleteMyScheduleApi,
  updateMyScheduleApi
};
