// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

/**
 * @param {number[]} array
 * @param {number} value
 * @returns {number}
 */
const binarySearch = (array, value) => {
	let left = 0;
	let right = array.length - 1;
	let current = Math.floor((left + right) / 2);
	while (left <= right) {
		if (value > array[current]) {
			right = current - 1;
		} else {
			left = current + 1;
		}
		current = Math.floor((left + right) / 2);
	}
	return left;
};

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
	const sortedPotions = potions.toSorted((a, b) => b - a);
	return spells.map((spell) => {
		return binarySearch(sortedPotions, success / spell);
	});
};

module.exports = { successfulPairs };
