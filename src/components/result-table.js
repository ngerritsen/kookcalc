import foodService from '../food-service'

export default function resultTable(el) {
  foodService.subscribe(onChangeFood)

  function onChangeFood(food) {
    el.innerHTML = calculateResult(food)
  }

  function calculateResult(food) {
    return food.weight - 1000
  }
}
