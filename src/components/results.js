import Inferno from 'inferno'
import '../styles/results.scss'

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
            <td className="results__cell">{result.perDay}<span className="results__unit">g</span></td>
            <td className="results__cell">{result.perMeal}<span className="results__unit">g</span></td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr className="results__row">
          <td className="results__cell results__cell--total">Total</td>
          <td className="results__cell results__cell--total">
            {totalResults.perDay}<span className="results__unit">g</span>
          </td>
          <td className="results__cell results__cell--total">
            {totalResults.perMeal}<span className="results__unit">g</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
}

export default Results
