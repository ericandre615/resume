import {
  getByLabel,
  getById,
} from './utils/get-by.js';

const data = [
  {
    id: 1,
    label: 'one',
  },
  {
    id: 2,
    label: 'two',
  }, {
    id: 3,
    label: 'three',
  }, {
    id: 4,
    label: 'four',
  }, {
    id: 5,
    label: 'five',
  },
];
const getOneByLabel = getByLabel(data)('one');
const getThreeById = getById(data)(3)

console.log('GetOneByLabel ', getOneByLabel);
console.log('GetThreeById ', getThreeById);
