// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	let current;
	while (true) {
		current = Math.floor((left + right) / 2);
		if (current > 0 && nums[current] < nums[current - 1]) {
			right = current - 1;
			continue;
		}
		if (current < nums.length - 1 && nums[current] < nums[current + 1]) {
			left = current + 1;
			continue;
		}
		return current;
	}
};

module.exports = { findPeakElement };
