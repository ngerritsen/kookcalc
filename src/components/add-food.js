import Inferno from 'inferno'

import '../styles/add-food.scss'

function AddFood({ addFood, inputFoodName, foodNameInput, validFoodName }) {
  return <form className="add-food" onSubmit={e => {
    e.preventDefault()

    if (validFoodName) {
      addFood()
    }
  }}>
      <input
        className="add-food__input"
        type="text"
        name="name"
        onInput={e => inputFoodName(e.target.value)}
        value={foodNameInput}
        placeholder="Food name"
      />
      {(() => {
        if (validFoodName) {
          return <button type="submit" className="add-food__button">Add</button>
        }

        return <button type="button" className="add-food__button add-food__button--disabled">Add</button>
      })()}
  </form>
}

export default AddFood
