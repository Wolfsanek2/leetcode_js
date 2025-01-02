// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0,
		nextLeft = 0,
		right = height.length - 1,
		nextRight = height.length - 1;
	let currentArea = area(height, left, right);
	while (nextLeft < nextRight) {
		if (height[nextLeft] < height[nextRight]) {
			nextLeft++;
		} else {
			nextRight--;
		}
		const nextArea = area(height, nextLeft, nextRight);
		if (nextArea > currentArea) {
			currentArea = nextArea;
			left = nextLeft;
			right = nextRight;
		}
	}
	return area(height, left, right);
};

/**
 * @param {number[]} height
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
const area = (height, left, right) => {
	const minHeight =
		height[left] < height[right] ? height[left] : height[right];
	return minHeight * (right - left);
};

module.exports = { maxArea };
