import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Foods from './foods';
import Header from './header';
import Results from './results';
import * as actions from '../actions';
import { calculateResults, calculateTotalResults } from '../helpers';

import '../styles/base.scss';

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
  </div>;
}

App.propTypes = {
  addFood: PropTypes.func.isRequired,
  changePan: PropTypes.func.isRequired,
  changeWeight: PropTypes.func.isRequired,
  foodNameInput: PropTypes.string.isRequired,
  foods: PropTypes.array.isRequired,
  inputFoodName: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  totalResults: PropTypes.object.isRequired,
  validFoodName: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const results = calculateResults(state.foods);

  return {
    ...state,
    totalResults: calculateTotalResults(results),
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
