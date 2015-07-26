import riot from 'riot';
import RiotControl from 'riotcontrol';
import FoodUtils from './food-utils';
import Immutable from 'immutable';

riot.tag(
	'result-report',
	`
	<table class="result-table">
		<tr class="result-table-heading">
			<th>Name</th>
			<th>Per meal</th>
			<th>Per day</th>
		</tr>
		<tr class="result-table-sub-results" each="{food in opts.foods.toJS()}">
			<td>{food.foodType}</td>
			<td>{foodUtils.calcWeightPerDay(food.weight, food.panWeight)}</td>
			<td>{foodUtils.calcWeightPerMeal(food.weight, food.panWeight)}</td>
		</tr>
		<tr class="result-table-total-results" class="total">
			<td>Total</td>
			<td>{foodUtils.calcWeightPerDay(totalWeight, totalPanWeight)}</td>
			<td>{foodUtils.calcWeightPerMeal(totalWeight, totalPanWeight)}</td>
		</tr>
	</table>
	`,
	function(opts) {
		this.foodUtils = FoodUtils;

		this.totalWeight = 0;
		this.totalPanWeight = 0;

		RiotControl.on('foods_changed', (foods) => {
			this.calcTotals();
			this.update();
		});

		this.calcTotals = () => {
			this.calcTotalWeight();
			this.calcTotalPanWeight();
		}

		this.calcTotalWeight = () => {
			this.totalWeight = opts.foods.reduce((total, food) => {
				return total + Number(food.weight) || 0;
			}, 0);
		}

		this.calcTotalPanWeight = () => {
			this.totalPanWeight = opts.foods.reduce((total, food) => {
				return total + Number(food.panWeight) || 0;
			}, 0);
		}
	}
);