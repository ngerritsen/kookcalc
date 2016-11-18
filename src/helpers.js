const DAYS = 5;
const MEALS_PER_DAY = 2;
const TOTAL_START_VALUE = 0;

export function calculateResults(foods) {
  return foods.map(food => ({
    food: food.name,
    perDay: calculateWeightPerDay(food),
    perMeal: calculateWeightPerDay(food) / MEALS_PER_DAY
  }));
}

export function calculateTotalResults(results) {
  const totalPerDay = results.reduce((perDay, result) => result.perDay + perDay, TOTAL_START_VALUE);
  return {
    perDay: totalPerDay,
    perMeal: totalPerDay / MEALS_PER_DAY
  };
}

function calculateWeightPerDay(food) {
  return (food.weight - food.pan) / DAYS;
}
