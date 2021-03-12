import axios from "../../config/axios/axios";

export const signUp = (value: SignUpFormValue) => {
  axios.post("api/member/signup", value);
};
export const login = (value: LoginFormValue) => {
  axios.post("/api/authenticate", value).then((res) => {
    // 일단은 로컬스토리이제 토큰 저장
    window.localStorage.setItem("access_token", res.data.access_token);
  });
};
