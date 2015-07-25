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
			{ name: 'Big', weight: 1485 },
			{ name: 'Big + handles', weight: 1430 },
			{ name: 'Medium', weight: 1127 },
			{ name: 'Medium + handles', weight: 1072 },
			{ name: 'Small', weight: 830 },
			{ name: 'Small + handles', weight: 625 },
			{ name: 'Casserole', weight: 680 },
			{ name: 'Casserole + handles', weight: 625 }
		];

		this.onSelect = (e) => {
			const id = opts.id;
			const weight = this.panSelection.value;
			RiotControl.trigger('set_pan_weight', { id: id, weight: weight });
		}
	}
);