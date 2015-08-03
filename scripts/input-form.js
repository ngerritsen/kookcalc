import riot from 'riot';

riot.tag(
	'input-form',	
	`
	<form class="form cf">
		<div each="{food in opts.foods.toJS()}" class="form-segment">
			<div class="form-element form-title">{food.foodType}: </div>
			<pan-selector id="{food.id}" panWeight="{food.panWeight}" class="form-element pan-selector"></pan-selector>
			<weight-input id="{food.id}" weight="{food.weight}" class="form-element weight-input"></weight-input>
		</div>
	</form>
	`
);