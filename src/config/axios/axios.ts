/* eslint-disable no-console */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const handleError = (err: AxiosError) => {
  alert(err.message);
  return Promise.reject(err);
};
axios.defaults.baseURL = "http://15.165.16.96:8080/api";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const request = {
    data: config.data,
    headers: config.headers
  };
  // eslint-disable-next-line no-param-reassign
  config.headers.common.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
  console.log(`[${config.method?.toUpperCase()}]${config.baseURL}${config.url} 요청:`, request);
  return config;
}, handleError);
// 응답 인터셉터
axios.interceptors.response.use((res: AxiosResponse) => {
  console.log("응답:", res);
  return res;
}, handleError);
export default axios;
