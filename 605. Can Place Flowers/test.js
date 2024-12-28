const { canPlaceFlowers } = require('./main.js');

test('flowerbed = [1,0,0,0,1], n = 1: true', () => {
	expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});

test('flowerbed = [1,0,0,0,1], n = 2: false', () => {
	expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
