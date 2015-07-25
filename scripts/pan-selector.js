import riot from 'riot';
import RiotControl from 'riotcontrol';

riot.tag(
	'pan-selector',
	`
	<div>
		<label>Pan: </label>
		<div class="form-input-element">
			<select onchange="{onSelect}" name="panSelection">
				<option each="{size in sizes}" value="{size.weight}">{size.name}</option>
			</select>
		</div>
	</div>
	`,
	function(opts) {
		this.sizes = [
			{ name: '-', weight: null },
			{ name: 'Big', weight: 1400 },
			{ name: 'Medium', weight: 1200 },
			{ name: 'Small', weight: 1100 }
		];

		this.onSelect = (e) => {
			const id = opts.id;
			const weight = this.panSelection.value;
			RiotControl.trigger('set_pan_weight', { id: id, weight: weight });
		}
	}
);