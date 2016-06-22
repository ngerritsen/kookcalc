let foods = []
let handlers = []
let lastId = 0

function getFoods() {
  return foods
}

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

function updateFood(id, updater) {
  foods = foods.map(food =>
    food.id === id ?
      updater(food) :
      food
  )
  publish()
}

function publish() {
  handlers.forEach(handler => handler(foods))
}

function createFood(id, name) {
  return {
    weight: 0,
    pan: 0,
    handle: false,
    id,
    name
  }
}

export default  {
  addFood,
  subscribe,
  changeFoodWeight,
  selectFoodPan,
  toggleHandle,
  getFoods
}
