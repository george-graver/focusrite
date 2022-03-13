const fs = require('fs');
const { parseInput, findFirstWinner } = require('./bingo');

const inputStr = fs.readFileSync('input.txt', 'utf8');
const { numbers, boards } = parseInput(inputStr);
const firstWinner = findFirstWinner(numbers, boards);

if (firstWinner) {
    console.log('First winner is board number ' + (boards.indexOf(firstWinner) + 1));
} else {
    console.log('No winner');
}