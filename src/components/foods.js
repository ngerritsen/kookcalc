import React, { PropTypes } from 'react'
import Food from './food';

import '../styles/foods.scss';

function Foods({ foods, changeWeight, changePan }) {
  return <ul className="foods">
    {foods.map(food =>
      <li className="foods__item" key={food.name}>
        <Food food={food} changeWeight={changeWeight} changePan={changePan}/>
      </li>
    )}
  </ul>
}

Foods.propTypes = {
  foods: PropTypes.array.isRequired,
  changeWeight: PropTypes.func.isRequired,
  changePan: PropTypes.func.isRequired
}

export default Foods
