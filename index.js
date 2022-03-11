const test = require('tape');
const { parseNumbers } = require('./main');

test('working at focusrite', assert => {
    assert.true(true, 'Focusrite is a great place to work');
    assert.end();
});

test('numbers parsed to int array', assert => {
    const inputNumberStr = '1,2,3,4';
    const expected = [1, 2, 3, 4];
    const actual = parseNumbers(inputNumberStr, ',');
    assert.deepEqual(expected, actual);
    assert.end();
});

test('numbers parsed to int array with double space character', assert => {
    const inputNumberStr = '1 2 3  4';
    const expected = [1, 2, 3, 4];
    const actual = parseNumbers(inputNumberStr, ' ');
    assert.deepEqual(expected, actual);
    assert.end();
});