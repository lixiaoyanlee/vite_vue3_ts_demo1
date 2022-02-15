
// 默认的对象类型
export interface IdefaultObject {
  [key: string]: any;
}

// 封装的本地LocalStorage对象类型
export interface ILocalStorage {
  set: (key: string, value: any) => void;
  //取出数据
  get: <T>(key: string) => any;
  // 删除数据
  remove: (key: string) => void;
  removeAll: () => void;
  [key:string]:any
}

export interface IStorageStore {
  /** 过期时间 */
  expiredAt: number;
  /** 保存的内容 */
  value: any;
}

// 项目分类 不同的项目
export interface IChannel {
  VISCERALHEALTH: string;
  HAIRSWAP: string;
  HAIRMEDICAL: string;
}


/**
 * 链接必须传参数
channel、restore
userId
平台--小程序or app
系统：安卓 ios
地理信息：（可能附近门店）
 */
export interface IMustURlParams{
  channel?:string
  restore?:string
  userId:string
  fromPlatform:string
  system:string
  geographyInfo:string
}

/**
 * @description: 频道 
 */
 export enum ChannelEnum {
    VISCERALHEALTH = 'visceralHealth', // 健康
    HAIRSWAP = 'hairSwap',  // 发型
    HAIRMEDICAL = 'hairMedical', // 头发
    
  }

/**
 * @description: 请求方法
 */
 export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE'
  }
/**
 * @description:  常用的contentTyp类型
 */
 export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // json
    TEXT = 'text/plain;charset=UTF-8',
    // form-data 一般配合qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  上传
    FORM_DATA = 'multipart/form-data;charset=UTF-8'
  }

  export enum  PlatFormEnv{
    WEB = 'web', //返回移动端H5环境
    MINI_PROGRAMER = 'miniprogram',  //小程序环境
    PC = 'pc',  // 返回PC环境
    IOS = 'ios',   // 返回ios的app环境
    ANDROID = 'android',   // 返回安卓app环境
    WEICHAT = 'weichat'   // 返回微信浏览器环境
  }


  export interface  IH5URLParams{
    channel:string, //哪个项目
    userId :string,  //userId
    platform:string,  // 平台----小程序：wxmp；或者app
    lng:string,   // 地址位置：经度（可能附近门店）有可能需要
    lat:string  // 地址位置：维度（可能附近门店）有可能需要
  }
