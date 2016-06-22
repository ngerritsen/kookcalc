import addFoodForm from './components/add-food-form'
import daysForm from './components/days-form'
import foodForm from './components/food-form'
import resultTable from './components/result-table'

const addFoodFormEl = document.querySelector('.js-add-food-form')
const daysFormEl = document.querySelector('.js-days-form')
const foodFormEl = document.querySelector('.js-food-form')
const resultTableEl = document.querySelector('.js-result')

addFoodForm(addFoodFormEl)
daysForm(daysFormEl)
foodForm(foodFormEl)
resultTable(resultTableEl)
