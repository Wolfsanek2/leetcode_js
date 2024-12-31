// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
	let lastArray = [];
	let lastNumber = null;
	for (let value of nums) {
		if (lastArray[0] < lastArray[1] && lastArray[1] < value) {
			return true;
		}
		if (
			lastArray[0] !== undefined &&
			lastArray[0] < value &&
			lastArray[1] !== undefined &&
			value < lastArray[1]
		) {
			lastArray[1] = value;
		} else if (lastNumber === null || value <= lastNumber) {
			lastNumber = value;
		} else {
			const lastInArray = lastArray.at(-1);
			if (lastInArray === undefined || value < lastInArray) {
				lastArray[0] = lastNumber;
				lastArray[1] = value;
				lastNumber = null;
			}
		}
	}
	return false;
};

module.exports = { increasingTriplet };
