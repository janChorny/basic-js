const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let {
		repeatTimes,
		separator = '+',
		addition = '',
		additionRepeatTimes,
		additionSeparator = '|' } = options;
	let strArray = [];
	let additionArray = [];

	if (addition === null) {
		addition = 'null';
	}
	if (additionRepeatTimes) {
		for (let i = 0; i < additionRepeatTimes; i++) {
			additionArray.push(addition);
		}
		addition = additionArray.join(additionSeparator);
	}

	str += addition;

	if (repeatTimes) {
		for (let i = 0; i < repeatTimes; i++) {
			strArray.push(str);
		}
		str = strArray.join(separator);
	}

	return str;
}

module.exports = {
  repeater
};
