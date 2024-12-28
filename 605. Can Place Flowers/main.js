// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let counter = 0;
	for (let i = 0; i < flowerbed.length; i++) {
		const current = flowerbed[i];
		const prev = flowerbed[i - 1];
		const next = flowerbed[i + 1];
		if (!prev && !next && !current) {
			flowerbed[i] = 1;
			counter++;
		}
		if (counter === n) {
			break;
		}
	}
	return counter >= n;
};

module.exports = { canPlaceFlowers };
