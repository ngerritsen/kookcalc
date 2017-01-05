import Inferno from 'inferno';
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

export default Foods;
