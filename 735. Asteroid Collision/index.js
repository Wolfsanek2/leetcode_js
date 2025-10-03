// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
	const stack = [];
	const result = [];
	for (const value of asteroids) {
		if (value > 0) {
			stack.push(value);
			continue;
		}
		let prev = stack.at(-1);
		if (!prev) {
			result.push(value);
			continue;
		}
		let isCurrentAsteroidAlive = true;
		while (stack.length) {
			prev = stack.at(-1);
			if (prev <= Math.abs(value)) {
				stack.pop();
			}
			if (Math.abs(value) <= prev) {
				isCurrentAsteroidAlive = false;
				break;
			}
		}
		if (isCurrentAsteroidAlive) {
			result.push(value);
		}
	}
	return result.concat(stack);
};

module.exports = { asteroidCollision };
