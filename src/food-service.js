let food = { weight: 0, pan: 0, handle: false }
let handlers = []

export default  {
  subscribe,
  changeFoodWeight,
  selectFoodPan,
  toggleHandle
}

function subscribe(handler) {
  handlers = [ ...handlers, handler ]
}

function changeFoodWeight(weight) {
  food = { ...food, weight }
  publish()
}

function selectFoodPan(pan) {
  food = { ...food, pan }
  publish()
}

function toggleHandle() {
  food = { ...food, handle: !food.handle }
  publish()
}

function publish() {
  handlers.forEach(handler => handler(food))
}
