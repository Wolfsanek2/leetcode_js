const { mergeAlternately } = require('./index.js');

test('abc + pqr = apbqcr', () => {
	expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
});

test('ab + pqrs = apbqrs', () => {
	expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
});

test('abcd + pq = apbqcr', () => {
	expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
});
