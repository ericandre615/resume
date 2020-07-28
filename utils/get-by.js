import { isString } from './duck-type.js';

const identity = data => data;
const toLower = s => (isString(s) ? s.toLowerCase() : s);

export const getByProp = prop => data => data[prop] || {};
export const getInArrByProp = (prop, transform = identity) => (data, val) => data.find(obj => transform(obj[prop]) == transform(val))
export const getByLabel = data => val => getInArrByProp('label', toLower)(data, val);
export const getById = data => val => getInArrByProp('id')(data, val);

export default {
  getByProp,
  getInArrByProp,
  getById,
  getByLabel
};

