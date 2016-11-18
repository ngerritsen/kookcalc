import React, { PropTypes } from 'react';
import { pans } from '../constants';

import '../styles/food.scss';

function Food({ food, changeWeight, changePan }) {
  return <form className="food">
    <h2 className="food__title">{food.name}</h2>
    <div className="food__input-container">
      <input
        className="food__weight-input"
        type="number"
        name="weight"
        placeholder="Weight"
        value={food.weight}
        onChange={e => changeWeight(food.name, Number(e.target.value))}
      />
      <select
        className="food__pan-select"
        name="pan"
        value={food.pan}
        onChange={e => changePan(food.name, Number(e.target.value))}
      >
        {pans.map(pan =>
          <option value={pan.weight} key={pan.name}>
            {pan.name}
          </option>
        )}
      </select>
    </div>
  </form>;
}

Food.propTypes = {
  changePan: PropTypes.func.isRequired,
  changeWeight: PropTypes.func.isRequired,
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    pan: PropTypes.number.isRequired
  }).isRequired
};

export default Food;
