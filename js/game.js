export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }
    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }
    makeMove(i) {
        if (this.board[i]) return;
        this.board[i] = this.turn;
        this.nextTurn();
    }
    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
        }
    }
}