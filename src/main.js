import foodForm from './components/food-form'
import resultTable from './components/result-table'

const foodFormEl = document.querySelector('.js-food-form')
const resultTableEl = document.querySelector('.js-result')

foodForm(foodFormEl)
resultTable(resultTableEl)
