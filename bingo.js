/**
 * Parses a raw input string and returns an object with bingo numbers/boards.
 * @param {*} input 
 * @returns 
 */
function parseInput(input) {
    const inputSections = input.split('\r\n\r\n');
    const numbers = parseNumbers(inputSections[0], ',');
    const boards = inputSections.slice(1).map(parseBoard);
    return { numbers, boards };
}

/**
 * Parses a board string and returns an object with row/column arrays.
 * @param {*} boardStr 
 * @returns 
 */
function parseBoard(boardStr) {
    const boardLines = boardStr.split('\r\n');
    const rows = boardLines.map(line => parseNumbers(line, ' '));
    const columns = invert2dArray(rows);
    return { rows, columns };
}

/**
 * Parses a string representing a delimited sequence of numbers and returns a number array.
 * @param {*} numbersStr 
 * @param {*} delimiter 
 * @returns 
 */
function parseNumbers(numbersStr, delimiter) {
    return numbersStr
        .split(delimiter)
        .map(n => parseInt(n))
        .filter(n => !isNaN(n));
}

/**
 * Inverts a 2d array (i.e. returns each column as a row and vice versa).
 * @param {*} arr 
 * @returns 
 */
function invert2dArray(arr) {
    return arr.map((row, rowIndex) => row.map((_, colIndex) => arr[colIndex][rowIndex]));
}

/**
 * Determines if the given board contains a row or column
 * where every element appears in the given number array. 
 * @param {*} numbers 
 * @param {*} board 
 * @returns 
 */
function isWinningBoard(numbers, board) {
    const combinations = [...board.rows, ...board.columns];
    return combinations.some(c => c.every(n => numbers.includes(n)));
}

/**
 * Iterates the given number array and returns the first board which contains a winning row or column.
 * @param {*} numbers 
 * @param {*} boards 
 * @returns 
 */
function findFirstWinner(numbers, boards) {
    const calledNumbers = [];
    
    for (const num of numbers) {
        calledNumbers.push(num);
        const firstWinningBoard = boards.find(b => isWinningBoard(calledNumbers, b));

        if (firstWinningBoard) {
            return firstWinningBoard;
        }
    }

    return null;
}

module.exports = {
    parseInput,
    parseNumbers,
    isWinningBoard,
    findFirstWinner
};