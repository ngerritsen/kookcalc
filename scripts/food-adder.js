import riot from 'riot';
import RiotControl from 'riotcontrol';

riot.tag(
	'food-adder',	
	`
	<form onsubmit="{onAddFood}" class="cf">
		<div class="form-element">
			Add food:
			<input name="foodType"/>
			<button type="submit">Add</button>
		</div>
	</form>
	`,
	function() {
		this.foods = [];

		this.onAddFood = (e) => {
			e.preventDefault();
			const name = this.foodType.value.trim();
			if(name) {
				RiotControl.trigger('add_food', name);
				this.foodType.value = '';
			}
		}
	}
);