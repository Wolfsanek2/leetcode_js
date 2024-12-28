/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	const max = candies.reduce((max, candie) => {
		if (candie > max) {
			max = candie;
		}
		return max;
	});
	return candies.map((candie) => {
		return candie + extraCandies >= max;
	});
};

module.exports = { kidsWithCandies };
