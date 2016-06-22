import foodService from '../food-service'
import { htmlToElement } from '../helpers'

export default function foodFormSection(el, id, name) {
  const contentEl = createContentEl()
  const weightInputEl = contentEl.querySelector('.js-weight-input')
  const panButtonEls = contentEl.querySelectorAll('.js-pan-button')
  const handleToggleEl = contentEl.querySelector('.js-handle-button')
  const activeClass = 'is-active'

  registerEventListeners()
  el.appendChild(contentEl)
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

  function createContentEl() {
    return htmlToElement(
      `<div class="food-section">
        <div class="food-name">${name}</div>
        <div class="input-container alt-weight">
          <input type="number" name="weight" class="input js-weight-input"></input>
        </div>

        <div class="food-pan-options">
          <button class="food-pan-option is-active js-pan-button" value="0">C</button>
          <button class="food-pan-option js-pan-button" value="1">S</button>
          <button class="food-pan-option js-pan-button" value="2">M</button>
          <button class="food-pan-option js-pan-button" value="3">L</button>
          <button class="food-pan-option alt-handle js-handle-button">H</button>
        </div>
      </div>`
    )
  }
}
