var ZombieLang = {};

ZombieLang.zombify = function(inputValue) {

	var patterns = [
		{
			// 8. "r" or "R' is replaced by "RR"
			match: /[rR](?!\s|$)/g,
			replace: 'RR'
		},
		{
			// 1. lower-case "r" at the end of words replaced with "rh".
			match : /r\b/g,
			replace : 'rh'

		},
		{
			// 2. an "a" or "A" by itself will be replaced with "hra".
			match: /\s(a|A)\s/g,
			replace: ' hra '
		},
		{
			// 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
			//   ".!?", followed by a space, followed by a letter.)
			// match: /(\.|\!|\?)\s([a-z])/g,
			match: /((\!|\?|\.)\s|^)([a-z])/gm,
			replace: function(match, p1, p2, offset) {
				if (match === /^([a-z])/) {
					return offset.toUpperCase();
				} else {
				 	return match.toUpperCase();
				}
			}
		},
		{
			// 4. "e" or "E" is replaced by "rr"
			match: /[eE]/g,
			replace: 'rr'
		},
		{
			// 5. "i" or "I" is replaced by "rrRr"
			match: /[iI]/g,
			replace: 'rrRr'
		},
		{
			// 6. "o" or "O" is replaced by "rrrRr"
			match: /[oO]/g,
			replace: 'rrrRr'
		},
		{
			// 7. "u" or "U" is replaced by "rrrrRr"
			match: /[uU]/,
			replace: 'rrrrRr'
		},
		{
			// 'y' or 'Y' is replaced by 'gotcha'
			match: /[yY]/g,
			replace: 'gotcha'
		},
		{
			// 'z' or 'Z' is replaced with "BRAINS"
			match: /[zZ]/g,
			replace:'BRAINS'
		}
	];

	for (var x = 0; x < patterns.length; x++) {
		if (pattern === null) {
			return 'error';
		}	
		var pattern = patterns[x];	
		inputValue = inputValue.replace(pattern.match, pattern.replace);

	}

	return inputValue;
};

ZombieLang.unzombify = function(inputValue) {
	var patterns = [
		{
			// 8. "r" or "R' is replaced by "derp"
			match: /[rR](?!\s|$)/g,
			replace: 'derp'
		},	
		{
			// 8. "r" or "R' is replaced by "herp"
			match: /[rR](?!\s|$)/g,
			replace: 'herp'
		}
	];
	for (var x = 0; x < patterns.length; x++) {
		if (pattern === null) {
			return 'error';
		}	
		var pattern = patterns[x];	
		inputValue = inputValue.replace(pattern.match, pattern.replace);

	}

	return inputValue;

};

module.exports = ZombieLang;