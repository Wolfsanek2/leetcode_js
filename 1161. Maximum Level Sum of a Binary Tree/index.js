// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

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
 */
const bfs = (root) => {
	const sums = new Map();
	const queue = [[root, 1]];
	while (queue.length) {
		const [node, level] = queue.shift();
		if (!node) {
			continue;
		}
		if (!sums.has(level)) {
			sums.set(level, 0);
		}
		sums.set(level, sums.get(level) + node.val);
		queue.push([node.left, level + 1]);
		queue.push([node.right, level + 1]);
	}
	let max = root.val;
	let maxLevel = 1;
	sums.forEach((sum, level) => {
		if (sum > max) {
			max = sum;
			maxLevel = level;
		}
	});
	return maxLevel;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
	return bfs(root);
};
