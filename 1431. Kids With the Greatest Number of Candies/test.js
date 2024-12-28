const { kidsWithCandies } = require('./index.js');

test('candies = [2,3,5,1,3], extraCandies = 3: [true,true,true,false,true]', () => {
	expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
		true,
		true,
		true,
		false,
		true,
	]);
});

test('candies = [4,2,1,1,2], extraCandies = 1: [true,false,false,false,false]', () => {
	expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
		true,
		false,
		false,
		false,
		false,
	]);
});

test('candies = [12,1,12], extraCandies = 10: [true,false,true]', () => {
	expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
});
