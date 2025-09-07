// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
	let zero = false;
	let zeroIndex = -1;
	let length = 0;
	let maxLength = length;
	for (let left = 0, right = 0; right < nums.length; right++) {
		if (!nums[right]) {
			if (zero) {
				left = zeroIndex + 1;
				zero = false;
			}
			zero = true;
			zeroIndex = right;
		}
		length = right - left + 1;
		if (length > maxLength) {
			maxLength = length;
		}
	}
	return maxLength - 1;
};

module.exports = { longestSubarray };
