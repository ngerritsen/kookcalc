let food = { weight: 0, pan: 0 }
let handlers = []

export default  {
  subscribe,
  changeFoodWeight,
  changeFoodPan
}

function subscribe(handler) {
  handlers = [ ...handlers, handler ]
}

function changeFoodWeight(weight) {
  food = { ...food, weight }
  publish()
}

function changeFoodPan(pan) {
  food = { ...food, pan }
  publish()
}

function publish() {
  handlers.forEach(handler => handler(food))
}
