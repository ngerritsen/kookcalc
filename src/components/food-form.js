import foodService from '../food-service'

export default function foodForm(el) {
  const weightInputEl = el.querySelector('.js-weight-input')
  el.addEventListener('submit', ev => ev.preventDefault())
  weightInputEl.addEventListener('change', ev => onChangeWeight(ev.target.value))

  function onChangeWeight(weight) {
    foodService.changeFoodWeight(weight)
  }
}
