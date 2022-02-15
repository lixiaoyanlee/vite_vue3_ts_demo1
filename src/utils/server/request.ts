import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IdefaultObject } from "./type";
import { whichType } from "../common";
const http = axios.create({
  baseURL: (import.meta.env.VITE_BASE_API as string | undefined) || "/api",
  timeout: 10000, //  超时时间 单位是ms，这里设置了10s的超时时间
});
export const defaultErrInfo: IdefaultObject = {
  status: -1,
  error_message: "接口请求失败",
  code: 1,
};
// 请求拦截
http.interceptors.request.use(
  (conflg: AxiosRequestConfig) => {
    if (whichType(conflg) === "object") {
      // 如果有token 就携带tokon
      const token = window.localStorage.getItem("accessToken");
      if (token && conflg.headers) {
        // 自定义令牌的字段名X-Token
        conflg.headers["X-Token"] = token;
      }
      return conflg;
    } else {
      return defaultErrInfo;
    }
  },
  err => {
    console.log(err);
    return err;
  }
);


// 响应拦截
http.interceptors.response.use(
  (conflg: AxiosResponse<any>) => {
    if (whichType(conflg) === "object") {
      return conflg;
    } else {
      return defaultErrInfo;
    }
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("客户端请求的语法错误，服务器无法理解");
          break;
        case 401:
          console.log("身份验证出错");
          break;
        case 403:
          console.log("服务器理解请求客户端的请求，但是拒绝执行此请求");
          break;
        case 404:
          console.log(`请求地址出错:${err.response.config.url}`);
          break;
        case 405:
          console.log("请求方式被禁止");
          break;
        case 408:
          console.log("请求超时");
          break;
        case 500:
          console.log("服务器内部错误，无法完成请求");
          break;
        case 501:
          console.log("	服务器不支持请求的功能，无法完成请求");
          break;
        case 502:
          console.log(
            "作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应"
          );
          break;
        case 503:
          console.log(
            "由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中"
          );
          break;
        case 504:
          console.log("充当网关或代理的服务器，未及时从远端服务器获取请求");
          break;
        case 505:
          console.log("服务器不支持请求的HTTP协议的版本");
          break;
        default:
          console.log(`请求出错:${err.message}`);
      }
      return err.response;
    } else {
      console.log("服务器连接失败");
      return defaultErrInfo;
    }
  }
);

export default http;
