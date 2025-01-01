// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let to = 0;
	for (let from = 0; from < nums.length; to++, from++) {
		while (nums[from] === 0 && from < nums.length - 1) {
			from++;
		}
		nums[to] = nums[from];
	}
	for (; to < nums.length; to++) {
		nums[to] = 0;
	}
};

module.exports = { moveZeroes };
