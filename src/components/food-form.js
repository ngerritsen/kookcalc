import foodService from '../food-service'

export default function foodForm(el) {
  const weightInputEl = el.querySelector('.js-weight-input')
  const panButtonEls = el.querySelectorAll('.js-pan-button')
  const handleToggleEl = el.querySelector('.js-handle-button')
  const activeClass = 'is-active'

  registerEventListeners()
  foodService.subscribe(onChangeFood)

  function registerEventListeners() {
    el.addEventListener('submit', ev => ev.preventDefault())
    weightInputEl.addEventListener('change', onChangeWeight)
    handleToggleEl.addEventListener('click', onClickHandleToggle)
    panButtonEls.forEach(el => el.addEventListener('click', onClickPan))
  }

  function onChangeWeight(ev) {
    foodService.changeFoodWeight(ev.target.value)
  }

  function onClickPan(ev) {
    const pan = Number(ev.target.value)
    foodService.selectFoodPan(pan)
  }

  function onClickHandleToggle(ev) {
    foodService.toggleHandle()
  }

  function onChangeFood({ handle, pan }) {
    updateHandleToggle(handle)
    updatePanButtons(pan)
  }

  function updateHandleToggle(handle) {
    const isActive = handleToggleEl.classList.contains(activeClass)

    if (isActive && !handle) {
      handleToggleEl.classList.remove(activeClass)
    } else if (!isActive && handle) {
      handleToggleEl.classList.add(activeClass)
    }
  }

  function updatePanButtons(pan) {
    panButtonEls.forEach(el => {
      const shouldBeActive = Number(el.value) === pan
      const isActive = el.classList.contains(activeClass)

      if (!shouldBeActive && isActive) {
        el.classList.remove(activeClass)
      } else if (shouldBeActive && !isActive) {
        el.classList.add(activeClass)
      }
    })
  }
}
