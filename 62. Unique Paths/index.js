// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const grid = Array.from({ length: m }, () => new Array(n).fill(0));
	grid[m - 1][n - 1] = 1;
	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (i < m - 1) {
				grid[i][j] += grid[i + 1][j];
			}
			if (j < n - 1) {
				grid[i][j] += grid[i][j + 1];
			}
		}
	}
	return grid[0][0];
};

module.exports = { uniquePaths };
