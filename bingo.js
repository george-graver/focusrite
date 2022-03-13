function parseInput(input) {
    const inputSections = input.split('\r\n\r\n');
    const numbers = parseNumbers(inputSections[0], ',');
    const boards = inputSections.slice(1).map(parseBoard);
    return { numbers, boards };
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