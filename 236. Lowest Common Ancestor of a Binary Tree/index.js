// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	/**
	 * @param {TreeNode} node
	 */
	const dfs = (node) => {
		if (!node) {
			return [null, false, false];
		}
		let hasP = node === p;
		let hasQ = node === q;

		const [ancestorLeft, hasPLeft, hasQLeft] = dfs(node.left);
		if (ancestorLeft) {
			return [ancestorLeft, true, true];
		}

		const [ancestorRight, hasPRight, hasQRight] = dfs(node.right);
		if (ancestorRight) {
			return [ancestorRight, true, true];
		}

		hasP = hasP || hasPLeft || hasPRight;
		hasQ = hasQ || hasQLeft || hasQRight;

		if (hasP && hasQ) {
			return [node, true, true];
		}

		return [null, hasP, hasQ];
	};

	return dfs(root)[0];
};

module.exports = { lowestCommonAncestor, TreeNode };
