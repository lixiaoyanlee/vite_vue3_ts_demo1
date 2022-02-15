
import type {AxiosRequestConfig} from "axios";

// 默认的对象类型
export interface IdefaultObject {
  [key: string]: any;
}
//拦截器
export interface MYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: any) => any;
  rrequestInterceptorCatch?: (error: any) => any;
}
 
export interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors;
  showLoading?: boolean;
}