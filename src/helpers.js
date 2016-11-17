const DAYS = 5
const MEALS_PER_DAY = 2

export function calculateResults(foods) {
  return foods.map(food => ({
    food: food.name,
    perDay: calculateWeightPerDay(food),
    perMeal: calculateWeightPerDay(food) / MEALS_PER_DAY
  }))
}

export function calculateTotalResults(results) {
  const perDay = results.reduce((perDay, result) => result.perDay + perDay, 0)
  return {
    perDay,
    perMeal: perDay / MEALS_PER_DAY
  }
}

function calculateWeightPerDay(food) {
  return (food.weight - food.pan) / DAYS
}
