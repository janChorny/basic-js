const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (!date instanceof Date) {
		throw new Error('Invalid date!');
	} 
	if (!arguments.length){
		return 'Unable to determine the time of year!'
	}
	if (date.getMonth() == 11 || date.getMonth() < 2){
		return 'winter';
	} else if (date.getMonth() <= 4) {
		return 'spring';
	} else if (date.getMonth() <= 7) {
		return 'summer';
	} else if (date.getMonth() <= 10) {
		return 'autumn';
	} else {
		throw new Error('Invalid date!');
	}
	return date
};

module.exports = {
  getSeason
};
