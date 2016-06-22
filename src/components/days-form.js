import foodService from '../food-service'

export default function daysForm(el) {
  const daysInputEl = el.querySelector('.js-days')

  daysInputEl.value = foodService.getDays()
  el.addEventListener('submit', changeDays)

  function changeDays(ev) {
    ev.preventDefault()
    foodService.changeDays(daysInputEl.value)
  }
}
