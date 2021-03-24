import axios from "../../config/axios/axios";

export const signUp = (value: SignUpFormValue) => {
  axios.post("/member/signup", value);
};
export const login = async (value: LoginFormValue) => {
  axios
    .post("/authenticate", value)
    .then((res) => {
      // 일단은 로컬스토리이제 토큰 저장
      window.localStorage.setItem("access_token", res.data.access_token);
      axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
      return res.data;
    })
    .catch((err) => {
      alert("로그인 실패 토큰없");
      console.log(err);
    });
};
