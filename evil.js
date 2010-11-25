/*
 * evil.js
 * http://github.com/kitgoncharov/evil.js
*/
(function (self) {
	var Math = self.Math;

	self.undefined = NaN = Infinity;
	self.alert = eval;
	self.prompt = self.confirm = self.open;

	self.Math = {
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
		'random': function () {
			return String.fromCharCode(~~(Math.random() * 1e3));
		},
		'round': Math.sqrt,
		'SQRT2': Math.SQRT1_2,
		'SQRT1_2': Math.LOG2E,
		'LOG2E': Math.LN10,
		'LN10': Math.LN2,
		'LN2': Math.E,
		'E': Math.PI,
		'PI': 3.2
	}
}(this));