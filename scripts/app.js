import riot from 'riot';
import RiotControl from 'riotcontrol';
import panSelector from './pan-selector';
import weightInput from './weight-input';
import foodAdder from './food-adder';
import resultReport from './result-report';

riot.tag(
	'app',	
	`
	<div class="container">
		<h1>Kookcalc</h1>
		<food-adder></food-adder>
		<form class="cf">
			<div each="{food in foods.toJS()}">
				<pan-selector foodtype="{food.foodType}" id="{food.id}" panWeight="{food.panWeight}"></pan-selector>
				<weight-input id="{food.id}" weight="{food.weight}"></weight-input>
			</div>
		</form>
		<result-report foods="{foods}"></result-report>
	</div>
	`,
	function() {
		this.foods = [];

		this.on('mount', () => RiotControl.trigger('kookcalc_init'));

		RiotControl.on('foods_changed', (foods) => {
			this.foods = foods;
			this.update();
		});
	}
);