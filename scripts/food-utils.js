class FoodUtils {
	calcWeightPerDay(weight, panWeight, daysOpt) {
		const days = daysOpt || 7;
		const rawValue = (weight - panWeight) / days;
		return Math.round(rawValue);
	}

	calcWeightPerMeal(weight, panWeight, daysOpt) {
		const valuePerDay = this.calcWeightPerDay(weight, panWeight, daysOpt);
		const rawValue = valuePerDay / 2;
		return Math.round(rawValue);
	}
}

export default new FoodUtils();