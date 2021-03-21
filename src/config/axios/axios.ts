/* eslint-disable no-console */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const handleError = (err: AxiosError) => {
  // 실패 요청시 할일
  let a = 0;
  a += 1;
  return Promise.reject(err);
};

axios.defaults.baseURL = "http://15.165.16.96:8080/api";
// if(cookie 있으면)
// {    axios.defaults.headers.common.Authorization = `Bearer "${token}"`}
// else
// {}
// 요청 인터셉터
axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
  "access_token"
)}`;

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const request = {
    data: config.data,
    headers: config.headers
  };
  console.log(request);
  console.log(
    `${config.method?.toUpperCase()}요청 ${config.baseURL}${config.url}로 전송`
  );
  return config;
}, handleError);
// 응답 인터셉터
axios.interceptors.response.use((res: AxiosResponse) => {
  console.log(res);
  return res;
}, handleError);

export default axios;
