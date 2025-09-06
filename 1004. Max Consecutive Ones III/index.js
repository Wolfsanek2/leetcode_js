// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
	let zeros = 0;
	let leftZero = -1;
	let zerosIndexes = [];
	let length = 0;
	let result = length;
	for (let left = 0, right = 0; right < nums.length; right++) {
		if (!nums[right]) {
			zerosIndexes.push(right);
			if (left > leftZero) {
				leftZero = right;
			}
			zeros++;
			if (zeros > k) {
				left = leftZero + 1;
				zerosIndexes = zerosIndexes.slice(1);
				leftZero = zerosIndexes[0] || -1;
				zeros--;
			}
		}
		length = right - left + 1;
		if (length > result) {
			result = length;
		}
	}
	return result;
};

module.exports = { longestOnes };
