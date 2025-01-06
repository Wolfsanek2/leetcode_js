// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	let result = 0;
	const count = {};
	nums.forEach((value) => {
		if (count[value] === undefined) {
			count[value] = 0;
		}
		count[value]++;
	});
	Object.entries(count).forEach(([value, currentCount]) => {
		const secondValue = k - value;
		const secondCount = count[secondValue];
		if (!secondCount) {
			return;
		}
		if (Number(value) === secondValue) {
			result += Math.floor(currentCount / 2);
		} else {
			result += min(currentCount, secondCount) / 2;
		}
	});
	return result;
};

/**
 * @param {number} v1
 * @param {number} v2
 * @returns {number}
 */
const min = (v1, v2) => {
	return v1 < v2 ? v1 : v2;
};

module.exports = { maxOperations };
