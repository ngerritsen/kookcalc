import foodService from '../food-service'
import { pans } from '../constants'
import { htmlToElement } from '../helpers'

export default function resultTable(el) {
  renderResult(foodService.getFoods(), foodService.getDays())
  foodService.subscribe(renderResult)

  function renderResult(foods, days) {
    const results = foods.map(food => ({ name: food.name, perDay: calculateResult(food, days) }))
    const total = calculateResultTotal(results)
    const resultEls = results
      .map(({ name, perDay }) => createFoodResultEl(name, perDay))
      .concat(createFoodResultTotalEl(total))

    el.innerHTML = resultEls.join('\n')
  }

  function createFoodResultEl(name, perDay) {
    return `<tr>
      <td>${name}</td>
      <td>${Math.round(perDay / 2)}</td>
      <td>${Math.round(perDay)}</td>
    </tr>`
  }

  function createFoodResultTotalEl(perDay) {
    return `<tr class="total">
      <td>Total</td>
      <td>${Math.round(perDay / 2)}</td>
      <td>${Math.round(perDay)}</td>
    </tr>`
  }

  function calculateResult({ weight, pan, handle }, days) {
    const panWeight = pans[pan].weight
    const finalPanWeight = handle ? panWeight + 100 : panWeight
    return (weight - finalPanWeight) / days
  }

  function calculateResultTotal(results) {
    return results.reduce((total, result) => total + result.perDay, 0)
  }
}
