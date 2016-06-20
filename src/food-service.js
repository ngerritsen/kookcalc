let food = { weight: 0 }
let handlers = []

export default  {
  subscribe,
  changeFoodWeight
}

function subscribe(handler) {
  handlers = [ ...handlers, handler ]
}

function changeFoodWeight(weight) {
  food = { weight }
  publish()
}

function publish() {
  handlers.forEach(handler => handler(food))
}
