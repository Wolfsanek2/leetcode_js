// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const answer = [];
	const prefixProducts = products(nums);
	const suffixProducts = products(nums.reverse());
	nums.forEach((value, i) => {
		let prefixProduct = prefixProducts[i - 1];
		if (prefixProduct === undefined) {
			prefixProduct = 1;
		}
		let suffixProduct = suffixProducts[nums.length - i - 2];
		if (suffixProduct === undefined) {
			suffixProduct = 1;
		}
		answer[i] = prefixProduct * suffixProduct;
		if (Object.is(answer[i], -0)) {
			answer[i] = 0;
		}
	});
	return answer;
};

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const products = (nums) => {
	let currentProduct = 1;
	return nums.map((value) => {
		currentProduct *= value;
		return currentProduct;
	});
};

module.exports = { productExceptSelf };
