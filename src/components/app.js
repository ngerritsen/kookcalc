import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Foods from './foods';
import Header from './header';
import Results from './results';
import * as actions from '../actions'
import { calculateResults, calculateTotalResults } from '../helpers'

import '../styles/base.scss';

function App({ foods, changeWeight, changePan, results, totalResults }) {
  return <div>
    <Header/>
    <Foods foods={foods} changeWeight={changeWeight} changePan={changePan}/>
    <Results results={results} totalResults={totalResults}/>
  </div>
}

App.propTypes = {
  foods: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
  changeWeight: PropTypes.func.isRequired,
  changePan: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const results =  calculateResults(state.foods)

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
