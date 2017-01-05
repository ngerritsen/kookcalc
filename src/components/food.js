import Inferno from 'inferno';
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
        onInput={e => changeWeight(food.name, Number(e.target.value))}
      />
      <select
        className="food__pan-select"
        name="pan"
        value={food.pan}
        onInput={e => changePan(food.name, Number(e.target.value))}
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

export default Food;
