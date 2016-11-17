import { CHANGE_WEIGHT, CHANGE_PAN, pans } from './constants'

const initialState = {
  foods: [
    {
      name: 'Rijst',
      pan: pans[6].weight,
      weight: 3000
    },
    {
      name: 'Broccoli',
      pan: pans[4].weight,
      weight: 2000
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WEIGHT:
      return {
        foods: updateFoods(state.foods, action.name, 'weight', action.weight)
      }
    case CHANGE_PAN:
      return {
        foods: updateFoods(state.foods, action.name, 'pan', action.pan)
      }
    default:
      return state
  }
}

function updateFoods(foods, name, property, value) {
  return foods.map(food => {
    if (food.name === name) {
      return {
        ...food,
        [property]: value
      }
    }

    return food
  })
}
