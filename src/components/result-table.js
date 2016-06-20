import foodService from '../food-service'
import { pans } from '../constants'

export default function resultTable(el) {
  foodService.subscribe(onChangeFood)

  function onChangeFood(food) {
    el.innerHTML = calculateResult(food)
  }

  function calculateResult({ weight, pan }) {
    return (weight - pans[pan].weight) / 5
  }
}
