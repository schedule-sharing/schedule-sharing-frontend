import axios from "../../config/axios/axios";

export const signUp = (value: SignUpFormValue) => {
  axios.post("/member/signup", value);
};
