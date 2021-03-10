import axios from "axios";
import { AddMyScheduleFormData } from "../store/reducers/scheduleReducer/myScheduleReducer";

const API_URL = "";

const testApi = async () => {
  const result = await axios.get(API_URL);
  const { data } = result;
  return data;
};

const addMyScheduleApi = async (newSchedule: any) => {
  const result = await axios.post(`${API_URL}/api/myschedule`, newSchedule, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MTUzNjYzMzV9.Dm_F7cD4RBgdqYQvZe2NesW_jdMCXdGML981GmlIuM5Vu30Te4Tv9OKJUuPSwx3BxRVrSsl9pWc_KHRJJ1smPA"
    }
  });
  const { data } = result;
  return data;
};

export { testApi, addMyScheduleApi };
