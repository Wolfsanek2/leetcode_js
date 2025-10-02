// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const map = arr.reduce((map, value) => {
		if (!map[value]) {
			map[value] = 0;
		}
		map[value]++;
		return map;
	}, {});
	const counts = Object.values(map);
	const set = new Set(counts);
	return counts.length === set.size;
};

module.exports = { uniqueOccurrences };
