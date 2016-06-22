import foodService from '../food-service'

export default function addFoodForm(el) {
  const foodNameInputEl = el.querySelector('.js-food-name')
  el.addEventListener('submit', addFood)

  function addFood(ev) {
    ev.preventDefault()
    foodService.addFood(foodNameInputEl.value)
  }
}
