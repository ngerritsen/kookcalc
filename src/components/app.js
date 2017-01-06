import Inferno from 'inferno'
import { connect } from 'inferno-redux'
import { bindActionCreators } from 'redux'

import Foods from './foods'
import Header from './header'
import Results from './results'
import * as actions from '../actions'
import { calculateResults, calculateTotalResults } from '../helpers'

import '../styles/base.scss'

function App({
  addFood,
  changePan,
  changeWeight,
  foodNameInput,
  foods,
  inputFoodName,
  results,
  totalResults,
  validFoodName
}) {
  return <div>
    <Header/>
    <Foods
      foods={foods}
      changeWeight={changeWeight}
      changePan={changePan}
      addFood={addFood}
      foodNameInput={foodNameInput}
      validFoodName={validFoodName}
      inputFoodName={inputFoodName}
    />
    <Results results={results} totalResults={totalResults}/>
  </div>
}

function mapStateToProps(state) {
  const results = calculateResults(state.foods)

  return {
    ...state,
    totalResults: calculateTotalResults(results),
    results
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
