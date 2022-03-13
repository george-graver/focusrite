const fs = require('fs');

function parseInput(input) {
    const file = fs.readFileSync(input, 'utf8');
    const lines = file.split(/\r?\n/);
    return lines;
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

function isWinningBoard(numbers, combinations) {
    return combinations.some(c => c.every(n => numbers.includes(n)));
}

const lines = parseInput('./input.txt');
const numbersStr = lines[0];
const numbers = parseNumbers(numbersStr, ',');

// TODO parse multiple boards
const boardLines = lines.slice(2);
const rows = boardLines.map(line => parseNumbers(line, ' '));
const columns = invert2dArray(rows);
const possibleCombinations = rows.concat(columns);
const isWinner = isWinningBoard(numbers, possibleCombinations);
console.log("Winner: " + isWinner);

module.exports = { parseNumbers };