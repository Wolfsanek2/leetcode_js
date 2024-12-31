const { increasingTriplet } = require('./main');

test('[1,2,3,4,5] => true', () => {
	expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
});

test('[5,4,3,2,1] => false', () => {
	expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
});

test('[2,1,5,0,4,6] => true', () => {
	expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
});

test('[1,3,2,4] => true', () => {
	expect(increasingTriplet([1, 3, 2, 4])).toBe(true);
});

test('[5,1,3,4] => true', () => {
	expect(increasingTriplet([5, 1, 3, 4])).toBe(true);
});

test('[2,4,-2,-3] => false', () => {
	expect(increasingTriplet([2, 4, -2, -3])).toBe(false);
});

test('[20,100,10,12,5,13] => true', () => {
	expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
});

test('[1,6,2,5,1] => true', () => {
	expect(increasingTriplet([1, 6, 2, 5, 1])).toBe(true);
});

test('[9, 10, 7, 8, 5, 6, 4, 1, 2, 3] => true', () => {
	expect(increasingTriplet([9, 10, 7, 8, 5, 6, 4, 1, 2, 3])).toBe(true);
});
