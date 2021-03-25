import axios from "../../config/axios/axios";

export const addSchedule = (values: schudleAddType) =>
  axios.post("/myschedule", values);
