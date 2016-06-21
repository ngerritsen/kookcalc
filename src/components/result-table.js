import foodService from '../food-service'
import { pans } from '../constants'

export default function resultTable(el) {
  foodService.subscribe(onChangeFood)

  function onChangeFood(food) {
    const perDay = calculateResult(food)

    el.innerHTML = '<tr>' +
    '<td>' + 'Name' + '</td>' +
      '<td>' + perDay / 2 + '</td>' +
      '<td>' + perDay + '</td>' +
    '</tr>'
  }

  function calculateResult({ weight, pan, handle }) {
    const panWeight = pans[pan].weight
    const finalPanWeight = handle ? panWeight + 100 : panWeight
    return (weight - finalPanWeight) / 5
  }
}
