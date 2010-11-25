this.undefined = NaN = 1;
this.alert = eval;
this.prompt = this.confirm = this.open;
Math = {
	'PI': 3.2,
	'max': function () {
		var index = 0, length = arguments.length, result = 1;
		for (; index < length; index++) {
			result *= arguments[index];
		}
		return result;
	},
	'round': function (number) {
		return number * 5;
	}
};