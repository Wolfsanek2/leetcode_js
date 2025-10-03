const { asteroidCollision } = require('.');

test('asteroids = [5,10,-5] => [5,10]', () => {
	expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
});

test('asteroids = [8,-8] => []', () => {
	expect(asteroidCollision([8, -8])).toEqual([]);
});

test('asteroids = [10,2,-5] => [10]', () => {
	expect(asteroidCollision([10, 2, -5])).toEqual([10]);
});
