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
        `;
    }
}