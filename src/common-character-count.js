const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	let length;

	if (s1.length > s2.length) {
		length = s1.length;
	} else {
		length = s2.length;
	}

	for (let i = 0; i < length; i++) {
		if (s1.includes(s2[i])) {
			count++
			s1 = s1.replace(s2[i], '');
			// console.log(s1)
		}
	}

	return count
}

module.exports = {
  getCommonCharacterCount
};
