import { isType, types } from '../duck-type.js';

const isDate = isType(types.date);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const formatDate = format => date => {
  const dateObj = isDate(date) ? date : new Date(date);
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.getDay();
  const year = dateObj.getFullYear();
  const time = dateObj.getTime();
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  return format.replace(/Y/g, year) // 2015
    .replace(/y/g, year.toString().substr(2, 3)) //15
    .replace(/mm/g, month + 1) //5, 9, 11
    .replace(/MM/g, (month.toString().length > 1) ? month + 1 : '0' + (month + 1)) // 05, 09, 11
    .replace(/dd/g, day) // 1, 5, 20, 26
    .replace(/DD/g, (day.toString().length > 1) ? day : '0' + day) // 01, 04, 15, 22
    .replace(/d/g, days[dayOfWeek].toString().substr(0, 3)) // Mon, Tue
    .replace(/D/g, days[dayOfWeek]) // Monday, Tuesday
    .replace(/^M|[^a-zA-Z0-9]M(?![a-zA-Z0-9])/g, months[month]) // January, March, June
    .replace(/^m|[^a-zA-Z0-9]m(?![a-zA-Z0-9])/g, months[month].toString().substr(0, 3)) // Jan, Mar, Jun
};

export default formatDate;
