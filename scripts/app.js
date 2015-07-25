import riot from 'riot';
import RiotControl from 'riotcontrol';
import panSelector from './pan-selector';
import weightInput from './weight-input';
import foodAdder from './food-adder';
import resultReport from './result-report';
import inputForm from './input-form';

riot.tag(
	'app',	
	`
	<div class="container">
		<h1 class="title"><i class="fa fa-cutlery"></i> kookcalc_</h1>
		<section class="section">
			<input-form foods="{foods}"></input-form>
		</section>
		<section class="section">
			<h2>Results</h2>
			<result-report foods="{foods}"></result-report>
		</section>
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