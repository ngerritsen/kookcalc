import addFoodForm from './components/add-food-form'
import daysForm from './components/days-form'
import foods from './components/foods'
import resultTable from './components/result-table'

const addFoodFormEl = document.querySelector('.js-add-food-form')
const daysFormEl = document.querySelector('.js-days-form')
const foodsEl = document.querySelector('.js-foods')
const resultTableEl = document.querySelector('.js-result')

addFoodForm(addFoodFormEl)
daysForm(daysFormEl)
foods(foodsEl)
resultTable(resultTableEl)
