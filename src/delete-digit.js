const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {
// 	let result
// 	let newArr = n.toString().split('').sort().reverse();
// 	result = +newArr.splice(0, newArr.length - 1).join('');
// 	return result
// }
function deleteDigit(n) {
	let str = n.toString();
	let finalArray = []
	for (let i = 0; i < str.length; i++) {
		let newArr = str.split('');
		newArr.splice(i, 1);
		finalArray.push(+newArr.join(''));
	}
	let result = finalArray.sort((a, b) => b - a)
	return result[0]
}

module.exports = {
  deleteDigit
};
