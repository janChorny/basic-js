const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	newArr: [],

  getLength() {
	return this.newArr.length;
  },
  addLink(value) {
    this.newArr.push(`( ${value} )`);
	 return this;
  },
  removeLink(position) {
    if (position > this.newArr.length|| isNaN(position)||position<=0){
		 this.newArr = [];
		 throw new Error("You can't remove incorrect link!");
	 }
	 this.newArr.splice(position-1,1);
	 return this;
  },
  reverseChain() {
	  this.newArr.reverse();
	  return this;
  },
  finishChain() {
	let res = this.newArr.join('~~');
	this.newArr = [];
	return res;
  }
};

module.exports = {
  chainMaker
};
