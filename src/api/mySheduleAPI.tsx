import axios from "axios";
import { AddMyScheduleFormData } from "../store/reducers/scheduleReducer/myScheduleReducer";

const API_URL = "";

const testApi = async () => {
  const result = await axios.get(API_URL);
  const { data } = result;
  return data;
};

const addMyScheduleApi = async (newSchedule: AddMyScheduleFormData) => {
  const result = await axios.post(API_URL, newSchedule);
  const { data } = result;
  return data;
};

export { testApi, addMyScheduleApi };
