import axios from "../../config/axios/axios";

export const addSchedule = (values: scheduleAddType) =>
  axios.post("/myschedule", values);
