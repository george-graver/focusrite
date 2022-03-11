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

function parseBoard(boardLines) {
    const rows = boardLines.map(line => parseNumbers(line, ' '));
    console.log(rows);
}

const lines = parseInput('./input.txt');

const numbersStr = lines[0];
const numbers = parseNumbers(numbersStr, ',');

const boardLines = lines.slice(2);
console.log(boardLines);
const board = parseBoard(boardLines);



module.exports = { parseNumbers };