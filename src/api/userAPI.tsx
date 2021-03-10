import axios from "axios";
import { initialFormValueType } from "../pages/user/form/SignUpForm";

const API_URL = "http://15.165.16.96:8080";

const registerUserApi = async (userFormData: any) => {
  const result = await axios.post(`${API_URL}/api/member/signup`, userFormData);
  return result.data;
};

const loginApi = async (loginFormData: any) => {
  const result = await axios.post(
    `${API_URL}/api/authenticate`,
    loginFormData,
    {
      withCredentials: true
    }
  );
  return result.data;
};

export { registerUserApi, loginApi };
