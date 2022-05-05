const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let result = count;
	 for (let i = 0; i < arr.length; i++){
		 if(Array.isArray(arr[i])){
			 let newArr = this.calculateDepth(arr[i], count+1)
			 if (newArr > result){
				 result = newArr;
			 }
		 }
	 }
	 return result;
  }
}

module.exports = {
  DepthCalculator
};
