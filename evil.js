/*
 * evil.js
 * http://github.com/kitgoncharov/evil.js
 *
 * Mike Taylor, Mathias Bynens, Kit Goncharov
 *
 * Released under the Unlicense.
*/
(function (self) {
	var Math = self.Math;

	self.undefined = NaN = Infinity;
	self.alert = eval;
	self.prompt = self.confirm = self.open;

	self.Math = {
		'PI': 3.2,
		'ceil': function () {
			return 42;
		},
		'max': function () {
			var index = 0, length = arguments.length, result = 1;
			for (; index < length; index++) {
				result *= arguments[index];
			}
			return result;
		},
		'min': function () {
			return Infinity;
		},
		'pow': function () {
			return 'pow pow pow!';
		},
		'E': Math.PI,
		'LN2': Math.E,
		'LN10': Math.LN2,
		'LOG2E': Math.LN10,
		'SQRT1_2': Math.LOG2E,
		'SQRT2': Math.SQRT1_2,
		'round': Math.sqrt
	}
}(this));