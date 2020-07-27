export const types = {
  obj: '[object Object]',
  arr: '[object Array]',
  str: '[object String]',
  num: '[object Number]',
  date: '[object Date]',
};

export const duckType = obj => Object.prototype.toString.call(obj);
export const isType = typ => obj => (typ === duckType(obj));

export default {
  duckType,
  isType,
  types,
};
