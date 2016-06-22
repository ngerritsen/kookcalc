import { createFood } from './factories'

let foods = []
let handlers = []
let lastId = 0
let days = 5

const getFoods = () => foods
const getDays = () => days

function subscribe(handler) {
  handlers = [ ...handlers, handler ]
}

function addFood(name) {
  foods = [...foods, createFood(++lastId, name)]
  publish()
}

function changeFoodWeight(id, weight) {
  updateFood(id, food => ({ ...food, weight }))
}

function selectFoodPan(id, pan) {
  updateFood(id, food => ({ ...food, pan }))
}

function toggleHandle(id) {
  updateFood(id, food => ({ ...food, handle: !food.handle }))
}

function changeDays(newDays) {
  days = newDays
  publish()
}

function updateFood(id, updater) {
  foods = foods.map(food =>
    food.id === id ?
      updater(food) :
      food
  )
  publish()
}

function publish() {
  handlers.forEach(handler => handler(foods, days))
}

export default  {
  addFood,
  getDays,
  changeDays,
  subscribe,
  changeFoodWeight,
  selectFoodPan,
  toggleHandle,
  getFoods
}
