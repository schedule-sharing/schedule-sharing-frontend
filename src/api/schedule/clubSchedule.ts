import { AddClubScheduleFormData } from "../../store/reducers/scheduleReducer/clubScheduleReducer";
import axios from "../../config/axios/axios";

const token = window.localStorage.getItem("access_token");

const getClubScheduleListApi = async (clubId: number, yearMonth: number) => {
  const result = await axios.get(`/clubSchedule/list/${clubId}`, {
    params: {
      yearMonth
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return result.data;
};

const addClubScheduleApi = async (newSchedule: AddClubScheduleFormData) => {
  const result = await axios.post("/clubSchedule", newSchedule, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const { data } = result;
  return data;
};

export { getClubScheduleListApi, addClubScheduleApi };
