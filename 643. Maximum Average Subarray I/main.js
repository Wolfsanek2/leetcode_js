// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}
	let max = sum / k;
	for (let i = 1; i < nums.length - k + 1; i++) {
		if (nums[i - 1] !== undefined) {
			sum -= nums[i - 1];
		}
		sum += nums[i + k - 1];
		const average = sum / k;
		if (average > max) {
			max = average;
		}
	}
	return max;
};

module.exports = { findMaxAverage };
