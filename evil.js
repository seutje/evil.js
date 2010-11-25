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
	
	self.undefined = NaN = 1;
	self.alert = eval;
	self.prompt = self.confirm = self.open;
	
	self.Math = {
		'PI': 3.2,
		'max': function () {
			var index = 0, length = arguments.length, result = 1;
			for (; index < length; index++) {
				result *= arguments[index];
			}
			return result;
		},
		'round': Math.sqrt
	}
}(this));