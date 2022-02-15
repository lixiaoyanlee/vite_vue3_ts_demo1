
import request from "./request";
import qs from 'qs'
import { MYRequestConfig,IdefaultObject } from "./type";
// json格式请求头
export const headerJSON = {
  "Content-Type": "application/json",
};
// FormData格式请求头
export const headerFormUrlencodedData = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
};
export const headerFormData = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
};
export const headerFileFormData = {
  "Content-Type": "multipart/form-data",
};
interface MYRequestParams{
    url:string
    params?:any
    json?:string
    customHeader?:IdefaultObject
    data?:any
    [key:string]:any
}
const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param json 判断数据发送是否是json格式
   */
  get(data:MYRequestParams) {
    const config:MYRequestConfig = {
      method: "get",
      url: data.url,
      headers: data.customHeader ? data.customHeader : (data.json ? headerJSON : headerFormData)
    };
    if (data.params) config.params = data.params;
    if(data.data) config.data = data.data;
    return request(config);
  },
  post(data:MYRequestParams) {
    const config:MYRequestConfig = {
      method: "post",
      url: data.url,
      headers: data.customHeader ? data.customHeader : (data.json ? headerJSON : headerFormData)
    };
    if (data.params) config.params = data.params;
    if(data.data) config.data = (data.json || data.customHeader) ? data.data: qs.stringify(data.data)
    
    console.log('postpost',config,data);
    return request(config);
  },
  put(data:MYRequestParams) {
    const config:MYRequestConfig = {
      method: "put",
      url: data.url,
      headers: data.customHeader ? data.customHeader : (data.json ? headerJSON : headerFormData)
    };
    if (data.params) config.params = data.params;
    if(data.data) config.data = data.data;
    return request(config);
  },
  delete(data:MYRequestParams) {
    const config:MYRequestConfig = {
      method: "delete",
      url: data.url,
      headers: data.customHeader ? data.customHeader : (data.json ? headerJSON : headerFormData)
    };
    if (data.params) config.params = data.params;
    if(data.data) config.data = data.data;
    return request(config);
  },
};
//导出
export default http;