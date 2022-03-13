const test = require('tape');
const { parseNumbers, isWinningBoard } = require('./main');

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

test('isWinningBoard returns true for board with winning row', assert => {
    const numbers = [1, 2 ,3 ,4 ,5];
    const board = {
        rows: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
        columns: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    };

    const actual = isWinningBoard(numbers, board);
    assert.true(actual);
    assert.end();
});

test('isWinningBoard returns true for board with winning column', assert => {
    const numbers = [1, 2, 3, 4, 5];
    const board = {
        rows: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
        columns: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    };

    const actual = isWinningBoard(numbers, board);
    assert.true(actual);
    assert.end();
});

test('isWinningBoard returns false for board with no winning row or column', assert => {
    const numbers = [1, 2, 3, 4, 5];
    const board = {
        rows: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
        columns: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    };

    const actual = isWinningBoard(numbers, board);
    assert.false(actual);
    assert.end();
});