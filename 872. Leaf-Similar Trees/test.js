const { leafSimilar, TreeNode } = require('.');

test('root1 = [1,2,3]; root2 = [1,3,2] => false', () => {
	const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
	const root2 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
	expect(leafSimilar(root1, root2)).toEqual(false);
});
