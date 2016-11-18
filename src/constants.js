export const CHANGE_WEIGHT = 'CHANGE_WEIGHT';
export const CHANGE_PAN = 'CHANGE_PAN';
export const ADD_FOOD = 'ADD_FOOD';
export const INPUT_FOOD_NAME = 'INPUT_FOOD_NAME';

const CASSEROLE_WEIGHT = 625;
const SMALL_WEIGHT = 830;
const MEDIUM_WEIGHT = 625;
const LARGE_WEIGHT = 1072;
const HANDLE_WEIGHT = 1430;

export const pans = [
  { name: 'Casserole', weight: CASSEROLE_WEIGHT },
  { name: 'Small', weight: SMALL_WEIGHT },
  { name: 'Small + handles', weight: SMALL_WEIGHT + HANDLE_WEIGHT },
  { name: 'Medium', weight: MEDIUM_WEIGHT },
  { name: 'Medium + handles', weight: MEDIUM_WEIGHT + HANDLE_WEIGHT },
  { name: 'Large', weight: LARGE_WEIGHT },
  { name: 'Large + handles', weight: LARGE_WEIGHT + HANDLE_WEIGHT }
];
