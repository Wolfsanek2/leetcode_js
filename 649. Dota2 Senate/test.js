const { predictPartyVictory } = require('.');

test('senate = "RD" => "Radiant"', () => {
	expect(predictPartyVictory('RD')).toEqual('Radiant');
});

test('senate = "RDD" => "Dire"', () => {
	expect(predictPartyVictory('RDD')).toEqual('Dire');
});

test('senate = "DDRRR" => "Dire"', () => {
	expect(predictPartyVictory('DDRRR')).toEqual('Dire');
});

test('senate = "DRRDRDRDRDDRDRDR" => "Radiant"', () => {
	expect(predictPartyVictory('DRRDRDRDRDDRDRDR')).toEqual('Radiant');
});
