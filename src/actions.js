import { CHANGE_WEIGHT, CHANGE_PAN } from './constants'

export function changeWeight(name, weight) {
  return {
    type: CHANGE_WEIGHT,
    name,
    weight
  }
}

export function changePan(name, pan) {
  return {
    type: CHANGE_PAN,
    name,
    pan
  }
}
