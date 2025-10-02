// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (!root) {
		return 0;
	}
	let result = 1;
	const stack = [{ node: root, depth: 1 }];
	while (stack.length) {
		const { node, depth } = stack.pop();
		const { left, right } = node;
		if (depth > result) {
			result = depth;
		}
		if (right) {
			stack.push({ node: right, depth: depth + 1 });
		}
		if (left) {
			stack.push({ node: left, depth: depth + 1 });
		}
	}
	return result;
};
