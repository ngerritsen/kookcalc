import Immutable from 'immutable';
import Food from './food';
import riot from 'riot';
import RiotControl from 'riotcontrol';
import shortId from 'shortid';

export default class FoodStore {
	constructor() {
		riot.observable(this);

		this.foods = Immutable.List();
		this.on('kookcalc_init', this.init);
		this.on('add_food', this.onAddFood);
		this.on('set_pan_weight', this.onSetPanWeight);
		this.on('set_food_weight', this.onSetFoodWeight);
	}

	init() {
		this.foods = this.foods.push(
			new Food({ foodType: 'rice', id: shortId.generate() }),
			new Food({ foodType: 'broccoli', id: shortId.generate() })
		);
		this.trigger('foods_changed', this.foods);
	}

	onAddFood(foodType) {
		const id = shortId.generate();
		const newFood = new Food({ foodType: foodType, id: id });
		this.foods = this.foods.push(newFood);
		this.trigger('foods_changed', this.foods);
	}

	onSetPanWeight(payload) {
		const {id, weight} = payload;
		this.setProperty('panWeight', id, weight);
		this.trigger('foods_changed', this.foods);
	}

	onSetFoodWeight(payload) {
		const {id, weight} = payload;
		this.setProperty('weight', id, weight);
		this.trigger('foods_changed', this.foods);
	}

	setProperty(property, id, value) {
		this.foods = this.foods.map((food) => {
			if(food.id === id) {
				food = food.set(property, value);
			}
			return food;
		});
	}
}