const board = document.getElementById('board');
let currentPlayer = 'X';
let cells = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(index) {
    if (cells[index] === '' && !gameOver) {
        cells[index] = currentPlayer;
        render();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
function render() {
cells.forEach((value, index) => {
    const cell = board.children[index];
    cell.innerText = value;
});}
function checkWinner() {
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];

for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        gameOver = true;
        setTimeout(() => {
            alert(`${cells[a]} wins!`);
            resetGame();
        }, 100);
        return;
    }
}

    if (!cells.includes('')) {
        gameOver = true;
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 100);
    }
}

function resetGame() {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    render();
}