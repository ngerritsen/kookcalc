import foodService from '../food-service'
import { htmlToElement } from '../helpers'
import { pans } from '../constants'

export default function food(el, id, name) {
  const formEl = createformEl()
  const weightInputEl = formEl.querySelector('.js-weight-input')
  const panButtonEls = formEl.querySelectorAll('.js-pan-button')
  const handleToggleEl = formEl.querySelector('.js-handle-button')
  const activeClass = 'is-active'

  registerEventListeners()
  el.appendChild(formEl)
  foodService.subscribe(onChangeFoods)

  function registerEventListeners() {
    weightInputEl.addEventListener('change', onChangeWeight)
    handleToggleEl.addEventListener('click', onClickHandleToggle)
    panButtonEls.forEach(el => el.addEventListener('click', onClickPan))
  }

  function onChangeFoods(foods) {
    const { pan, handle } = foods.find(food => food.id === id)
    updateHandleToggle(handle)
    updatePanButtons(pan)
  }

  function onChangeWeight(ev) {
    foodService.changeFoodWeight(id, ev.target.value)
  }

  function onClickPan(ev) {
    const pan = Number(ev.target.value)
    foodService.selectFoodPan(id, pan)
  }

  function onClickHandleToggle(ev) {
    foodService.toggleHandle(id)
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

  function createformEl() {
    return htmlToElement(
      `<form class="food">
        <span class="food__name">${name}</span>
        <span class="food__weight-input">
          <label class="food__weight-label" for="weight">Weight</label>
          <input type="number" name="weight" class="input-field js-weight-input"></input>
        </span>
        ${pans
          .map(({ tag }, id) =>
            `<span class="food__pan-size">
              <input
                type="radio"
                name="pan-size"
                id="pan-size-${id}"
                class="js-pan-button food__pan-size-radio"
                ${id === 0 ? 'checked' : ''}
                value="${id}"
              >
              <label class="food__pan-size-label" for="pan-size-${id}">${tag}</label>
            </span>`
          ).join('\n')
        }
        <span class="food__handle">
          <input type="checkbox" name="handle" id="handle" class="food__handle-checkbox js-handle-button">
          <label class="food__handle-label" for="handle">Handle</label>
        </span>
      </form>`
    )
  }
}
