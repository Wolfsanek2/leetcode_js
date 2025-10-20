// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
	if (!root) {
		return 0;
	}
	const prefixSumFreq = new Map();
	// prefixSumFreq.set(0, 1);
	/**
	 * @param {TreeNode} root
	 * @param {number} prefixSum
	 * @returns {number}
	 */
	function dfs(root, prefixSum) {
		let result = 0;
		prefixSum += root.val;
		if (prefixSum === targetSum) {
			result++;
		}
		if (prefixSumFreq.has(prefixSum - targetSum)) {
			result += prefixSumFreq.get(prefixSum - targetSum);
		}
		if (!prefixSumFreq.has(prefixSum)) {
			prefixSumFreq.set(prefixSum, 0);
		}
		prefixSumFreq.set(prefixSum, prefixSumFreq.get(prefixSum) + 1);
		if (root.left) {
			result += dfs(root.left, prefixSum);
		}
		if (root.right) {
			result += dfs(root.right, prefixSum);
		}

		if (prefixSumFreq.get(prefixSum) > 1) {
			prefixSumFreq.set(prefixSum, prefixSumFreq.get(prefixSum) - 1);
		} else {
			prefixSumFreq.delete(prefixSum);
		}
		return result;
	}

	return dfs(root, 0);
};

module.exports = { pathSum, TreeNode };
