export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="header_turn">
                    X's Turn
                </div>
                <div class="header_status">
                    In Progress
                </div>
                <button type="button" class="header_restart">
                    <i class="material-icons">refresh</i>
                </button>
            </div>
            <div class="board">
                <div class="board_tile" data-index="0">0</div>
                <div class="board_tile" data-index="1">1</div>
                <div class="board_tile board_tile-winner" data-index="2">2</div>
                <div class="board_tile" data-index="3">3</div>
                <div class="board_tile" data-index="4">4</div>
                <div class="board_tile" data-index="5">5</div>
                <div class="board_tile" data-index="6">6</div>
                <div class="board_tile" data-index="7">7</div>
                <div class="board_tile" data-index="8">8</div>
            </div>
        `;
    }
}