import foodService from '../food-service'

export default function daysForm(el) {
  const daysSelectEl = el.querySelector('.js-days')

  daysSelectEl.value = foodService.getDays()
  el.addEventListener('change', changeDays)

  function changeDays(ev) {
    ev.preventDefault()
    console.log(ev.target.value)
    foodService.changeDays(ev.target.value)
  }
}
