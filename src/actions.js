import { CHANGE_WEIGHT, CHANGE_PAN, ADD_FOOD, INPUT_FOOD_NAME } from './constants';

export function changeWeight(name, weight) {
  return {
    type: CHANGE_WEIGHT,
    name,
    weight
  };
}

export function changePan(name, pan) {
  return {
    type: CHANGE_PAN,
    name,
    pan
  };
}

export function addFood() {
  return {
    type: ADD_FOOD
  };
}

export function inputFoodName(name) {
  return {
    type: INPUT_FOOD_NAME,
    name
  };
}
