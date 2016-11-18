import { CHANGE_WEIGHT, CHANGE_PAN, ADD_FOOD, INPUT_FOOD_NAME, pans } from './constants';

const FIRST_DEFAULT_PAN_INDEX = 6;
const SECOND_DEFAULT_PAN_INDEX = 4;

const initialState = {
  foods: [
    {
      name: 'Rijst',
      pan: pans[FIRST_DEFAULT_PAN_INDEX].weight,
      weight: 3000
    },
    {
      name: 'Broccoli',
      pan: pans[SECOND_DEFAULT_PAN_INDEX].weight,
      weight: 2000
    }
  ],
  foodNameInput: '',
  validFoodName: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WEIGHT:
      return {
        foods: updateFoods(state.foods, action.name, 'weight', action.weight)
      };
    case CHANGE_PAN:
      return {
        foods: updateFoods(state.foods, action.name, 'pan', action.pan)
      };
    case ADD_FOOD: {
      const food = {
        name: state.foodNameInput,
        pan: pans[FIRST_DEFAULT_PAN_INDEX].weight,
        weight: 3000
      };

      return {
        foods: [...state.foods, food],
        foodNameInput: '',
        validFoodName: false
      };
    }
    case INPUT_FOOD_NAME:
      return {
        ...state,
        foodNameInput: action.name,
        validFoodName: isValidFoodName(state, action.name)
      };
    default:
      return state;
  }
}

function updateFoods(foods, name, property, value) {
  return foods.map(food => {
    if (food.name === name) {
      return {
        ...food,
        [property]: value
      };
    }

    return food;
  });
}

function isValidFoodName(state, name) {
  const nameExists = state.foods.find(food => food.name === name);
  return !!name.trim() && !nameExists;
}
