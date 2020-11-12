export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="header_turn">
                    X's turn
                </div>
                <div class="header_status">
                    In progress
                </div>
                <button type="button" class="header_restart">
                    <i class="material-icons">Refresh</i>
                </button>
            </div>
        `;
    }
}