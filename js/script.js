import Game from "./game.js";

let game = new Game();

console.log(game.turn);
game.makeMove(0);
console.log(game.board.join(","));
console.log(game.turn);
game.makeMove(6);
console.log(game.board.join(","));