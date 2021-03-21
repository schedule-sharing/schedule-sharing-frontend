import axios from "../../config/axios/axios";

export const addClub = (value: clubAddType) => axios.post("/club", value);
