const fs = require('fs');

function parseInput(input) {
    const inputSections = input.split(/\n\s*\n/);
    const calledNumbers = parseNumbers(inputSections[0], ',');
    const boards = inputSections.slice(1).map(parseBoard);
    return { calledNumbers, boards };
}

function parseBoard(boardStr) {
    const boardLines = boardStr.split('\r\n');
    const rows = boardLines.map(line => parseNumbers(line, ' '));
    const columns = invert2dArray(rows);
    return { rows, columns };
}

function parseNumbers(numbersStr, delimiter) {
    return numbersStr
        .split(delimiter)
        .map(n => parseInt(n))
        .filter(n => !isNaN(n));
}

function invert2dArray(arr) {
    return arr.map((row, rowIndex) => row.map((_, colIndex) => arr[colIndex][rowIndex]));
}

function isWinningBoard(numbers, board) {
    const combinations = [...board.rows, ...board.columns];
    return combinations.some(c => c.every(n => numbers.includes(n)));
}

const inputStr = fs.readFileSync('./input.txt', 'utf8');
const { calledNumbers, boards } = parseInput(inputStr);
const isWinner = isWinningBoard(calledNumbers, boards[1]);
console.log("Winner: " + isWinner);

module.exports = { parseNumbers };