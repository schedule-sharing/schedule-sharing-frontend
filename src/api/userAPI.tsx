import axios from "axios";
import { initialFormValueType } from "../pages/user/form/SignUpForm";

const API_URL = "";

const registerUserApi = async (userFormData: any) => {
  const result = await axios.post(API_URL, userFormData);
  return result.data;
};

const loginApi = async (loginFormData: any) => {
  console.log(loginFormData);
  const result = await axios.post(API_URL, loginFormData);
  return result.data;
};

export { registerUserApi, loginApi };
