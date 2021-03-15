/* eslint-disable no-console */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://15.165.16.96:8080/api";
// if(cookie 있으면)
// {    axios.defaults.headers.common.Authorization = `Bearer "${token}"`}
// else
// {}
// 요청 인터셉터
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config.headers.authoriation=`Bearer ${document.cookie}`;

    const request = {
      data: config.data,
      headers: config.headers
    };
    console.log(
      `${config.method?.toUpperCase()}요청 ${config.baseURL}${
        config.url
      }로 전송`
    );
    console.log(request);
    return config;
  },
  (err: AxiosError) => {
    handleError(err);
    console.error(`요청에러:${err}`);
    return Promise.reject(err);
  }
);
// 응답 인터셉터
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log(res);
    return res;
  },
  (err: AxiosError) => {
    handleError(err);
    return Promise.reject(err);
  }
);

const handleError = (err: AxiosError) => {
  if (err.response) {
    const error = {
      type: "error(에러)",
      data: err.response.data,
      header: err.response.headers
    };
    console.log(error);
  } else if (err.request) {
    console.log("요청은 했지만 응답이 없음..");
  } else {
    console.log(err);
  }
};

export default axios;
