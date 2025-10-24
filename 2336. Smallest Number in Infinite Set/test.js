const { SmallestInfiniteSet } = require('.');

test('["SmallestInfiniteSet","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest"], [[],[2],[],[],[],[1],[],[],[]] => [null,null,1,2,3,null,1,4,5]', () => {
	const obj = new SmallestInfiniteSet();
	obj.addBack(2);
	expect(obj.popSmallest()).toEqual(1);
	expect(obj.popSmallest()).toEqual(2);
	expect(obj.popSmallest()).toEqual(3);
	obj.addBack(1);
	expect(obj.popSmallest()).toEqual(1);
	expect(obj.popSmallest()).toEqual(4);
	expect(obj.popSmallest()).toEqual(5);
});
