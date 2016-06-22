import foodService from '../food-service'
import foodFormSection from './food-form-section'
import { htmlToElement } from '../helpers'

export default function foodForm(el) {
  let foods = foodService.getFoods()

  el.addEventListener('submit', ev => ev.preventDefault())
  foods.forEach(({ name, id }) => addFoodSection(name, id))
  foodService.subscribe(onChangeFoods)

  function onChangeFoods(newFoods) {
    if (newFoods.length > foods.length) {
      const { name, id } = newFoods[newFoods.length - 1]
      addFoodSection(name, id)
    }

    foods = newFoods
  }

  function addFoodSection(name, id) {
    const containerEl = htmlToElement(`<div class="js-food-section-${id}"></div>`)
    el.appendChild(containerEl)
    foodFormSection(containerEl, id, name)
  }
}
