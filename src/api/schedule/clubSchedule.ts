import {
  AddClubScheduleFormData,
  UpdateClubScheduleFormData
} from "../../store/reducers/scheduleReducer/clubScheduleReducer";
import axios from "../../config/axios/axios";

const getClubScheduleListApi = async (clubId: number, yearMonth: string) => {
  const result = await axios.get(`/clubSchedule/list/${clubId}`, {
    params: {
      yearMonth
    }
  });
  return result.data;
};

const addClubScheduleApi = async (newSchedule: AddClubScheduleFormData) => {
  const result = await axios.post("/clubSchedule", newSchedule);
  return result.data;
};

const updateClubScheduleApi = async (
  id: number,
  newSchedule: UpdateClubScheduleFormData
) => {
  const result = await axios.put(`/clubSchedule/${id}`, newSchedule);
  return result.data;
};

const deleteClubScheduleApi = async (id: number) => {
  const result = await axios.delete(`/clubSchedule/${id}`);
  return result.data;
};

export {
  getClubScheduleListApi,
  addClubScheduleApi,
  updateClubScheduleApi,
  deleteClubScheduleApi
};
