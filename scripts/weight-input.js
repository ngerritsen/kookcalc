import riot from 'riot';
import RiotControl from 'riotcontrol';

riot.tag(
	'weight-input',
	`
	<div class="form-element">
		Weight: <input onchange="{onChangeWeight}" name="weight"/>
	</div>
	`,
	function(opts) {
		this.onChangeWeight = (e) => {
			const id = opts.id;
			const weight = Number(this.weight.value);
			if(weight) {
				RiotControl.trigger('set_food_weight', { id: id, weight: weight });
			}
		}
	}
);