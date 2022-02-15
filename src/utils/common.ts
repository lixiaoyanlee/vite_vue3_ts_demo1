import { IdefaultObject } from "./server/type";


/**
 * 是否是对象
 * @param obj 传递的参数
 * @returns boolean true/false
 */
export function isObject(obj: any): boolean {
  return obj && typeof obj === "object";
}

// 类型字典
export let whichType = (data: any) => {
  let dist: IdefaultObject = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number",
    "[object Function]": "function",
    "[object String]": "string",
    "[object Null]": "null",
    "[object Undefined]": "undefined",
  };

  return dist[Object.prototype.toString.call(data)];
};

// 深度优先遍历 复制对象
export let deepCopy = (data: any) => {
  let newData: any;

  if (whichType(data) === "array") {
    newData = [];
    data.map((item: any, index: string | number) => {
      newData[index] = deepCopy(item);
    });
  } else if (whichType(data) === "object") {
    newData = {};
    Object.keys(data).map((item) => {
      newData[item] = deepCopy(data[item]);
    });
  } else {
    newData = data;
  }

  return newData;
};

