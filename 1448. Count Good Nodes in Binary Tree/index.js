// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

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
 * @param {number} max
 * @returns {number}
 */
function dfs(root, max) {
	let result = root.val < max ? 0 : 1;
	if (root.left) {
		result += dfs(root.left, Math.max(max, root.val));
	}
	if (root.right) {
		result += dfs(root.right, Math.max(max, root.val));
	}
	return result;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
	return dfs(root, root.val);
};
