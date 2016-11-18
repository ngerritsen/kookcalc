import React, { PropTypes } from 'react';
import Food from './food';
import AddFood from './add-food';

import '../styles/foods.scss';

function Foods({ addFood, changePan, changeWeight, foodNameInput, foods, inputFoodName, validFoodName }) {
  return <ul className="foods">
    {foods.map(food =>
      <li className="foods__item" key={food.name}>
        <Food food={food} changeWeight={changeWeight} changePan={changePan}/>
      </li>
    )}
    <li className="foods__item">
      <AddFood
        addFood={addFood}
        foodNameInput={foodNameInput}
        inputFoodName={inputFoodName}
        validFoodName={validFoodName}
      />
    </li>
  </ul>;
}

Foods.propTypes = {
  addFood: PropTypes.func.isRequired,
  changePan: PropTypes.func.isRequired,
  changeWeight: PropTypes.func.isRequired,
  foodNameInput: PropTypes.string.isRequired,
  foods: PropTypes.array.isRequired,
  inputFoodName: PropTypes.func.isRequired,
  validFoodName: PropTypes.bool.isRequired
};

export default Foods;
