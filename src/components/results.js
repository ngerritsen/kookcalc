import React, { PropTypes } from 'react'
import '../styles/results.scss';

function Results({ results, totalResults }) {
  return <div className="results">
    <table className="results__table">
      <thead>
        <tr className="results__row">
          <th className="results__cell results__cell--heading">Food</th>
          <th className="results__cell results__cell--heading">Day</th>
          <th className="results__cell results__cell--heading">Meal</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result =>
          <tr className="results__row" key={result.food}>
            <td className="results__cell">{result.food}</td>
            <td className="results__cell">{result.perDay}g</td>
            <td className="results__cell">{result.perMeal}g</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr className="results__row">
          <td className="results__cell results__cell--total">Total</td>
          <td className="results__cell results__cell--total">{totalResults.perDay}g</td>
          <td className="results__cell results__cell--total">{totalResults.perMeal}g</td>
        </tr>
      </tfoot>
    </table>
  </div>
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      food: PropTypes.string.isRequired,
      perDay: PropTypes.number.isRequired,
      perMeal: PropTypes.number.isRequired
    })
  ).isRequired,
  totalResults: PropTypes.shape({
    perDay: PropTypes.number.isRequired,
    perMeal: PropTypes.number.isRequired
  })
}

export default Results
