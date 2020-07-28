export const types = {
  obj: '[object Object]',
  arr: '[object Array]',
  str: '[object String]',
  num: '[object Number]',
  date: '[object Date]',
};

export const duckType = obj => Object.prototype.toString.call(obj);
export const isType = typ => obj => (typ === duckType(obj));
export const isString = obj => isType(types.str)(obj);
export const isArray = obj => isType(types.arr)(obj);
export const isNumber = obj => isType(types.num)(obj);
export const isDate = obj => isType(types.date)(obj);
export const isObject = obj => isType(types.obj)(obj);

export default {
  duckType,
  isType,
  isString,
  isArray,
  isNumber,
  isDate,
  isObject,
  types,
};
