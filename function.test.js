const functions = require('./function');

test('add 2+4 to equal 6', () => expect(functions.add(2, 4)).toBe(6));
test('sub 12-5 to equal 7', () => expect(functions.sub(12, 5)).toBe(7));
test('mul 6x5 to equal 30', () => expect(functions.mul(6, 5)).toBe(30));
