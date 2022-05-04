const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	finalChain: [],

	getLength() {
		return this.finalChain.length;
	},

	addLink(value) {
		this.finalChain.push(`( ${value !== undefined ? value : ''} )`);
		return this;
	},

	removeLink(position) {
		if (!Number.isInteger(position) || this.finalChain[position - 1] === undefined) {
			this.finalChain = [];
			throw new Error(`You can't remove incorrect link!`);
		}
		this.finalChain.splice(position - 1, 1);
		return this;
	},

	reverseChain() {
		this.finalChain.reverse();
		return this;
	},

	finishChain() {
		const res = this.finalChain.join('~~');
		this.finalChain = [];
		return res;
	}
};

module.exports = {
  chainMaker
};
