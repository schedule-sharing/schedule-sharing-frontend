import axios from "../config/axios/axios";

export const signUp = (value: SignUpFormValue) => {
  axios.post("api/member/signup", value).then((res) => console.log(res));
};
