let foods = [createFood(0, 'Name')]
let handlers = []
let lastId = 0

function subscribe(handler) {
  handlers = [ ...handlers, handler ]
}

function addFood(name) {
  const id = lastId++
  foods = [...foods, createFood(id, name)]
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

function createFood(name, id) {
  return {
    id: 0,
    weight: 0,
    pan: 0,
    handle: false,
    name
  }
}

export default  {
  subscribe,
  changeFoodWeight,
  selectFoodPan,
  toggleHandle
}
