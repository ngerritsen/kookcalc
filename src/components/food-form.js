import foodService from '../food-service'

export default function foodForm(el) {
  const weightInputEl = el.querySelector('.js-weight-input')
  const panButtonEls = el.querySelectorAll('.js-pan-button')
  const panActiveClass = 'is-active'

  el.addEventListener('submit', ev => ev.preventDefault())
  weightInputEl.addEventListener('change', onChangeWeight)
  panButtonEls.forEach(el => el.addEventListener('click', onChangePan))

  foodService.subscribe(onChangeFood)

  function onChangeWeight(ev) {
    foodService.changeFoodWeight(ev.target.value)
  }

  function onChangePan(ev) {
    const pan = Number(ev.target.value)
    foodService.changeFoodPan(pan)
  }

  function onChangeFood(food) {
    panButtonEls.forEach(el => {
      const shouldBeActive = Number(el.value) === food.pan
      const isActive = el.classList.contains(panActiveClass)

      if (!shouldBeActive && isActive) {
        el.classList.remove(panActiveClass)
      } else if (shouldBeActive && !isActive) {
        el.classList.add(panActiveClass)
      }
    })
  }
}
