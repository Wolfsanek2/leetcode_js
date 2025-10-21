const { lowestCommonAncestor, TreeNode } = require('.');

test('root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 => 5', () => {
	const n4 = new TreeNode(4);
	const n7 = new TreeNode(7);
	const n2 = new TreeNode(2, n7, n4);
	const n6 = new TreeNode(6);
	const n5 = new TreeNode(5, n6, n2);
	const n0 = new TreeNode(0);
	const n8 = new TreeNode(8);
	const n1 = new TreeNode(1, n0, n8);
	const root = new TreeNode(3, n5, n1);
	expect(lowestCommonAncestor(root, n5, n4).val).toEqual(5);
});
