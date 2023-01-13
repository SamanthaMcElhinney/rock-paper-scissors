class Game {
    constructor(){
        this.humanPlayer = new Player ('human', '👩🏽‍🎤')
        this.catPlayer = new Player ('cat', '😼')
        this.message = undefined;
        this.easyChoices= ['water', 'cat', 'cup']
        this.difficultChoices = ['water', 'cat', 'cup', 'yarn', 'dog']
        this.winner = undefined;
    }

    playEasyGame(){
        var human = this.humanPlayer.playerChoice
        var cat = this.catPlayer.playerChoice
        if (human === cat) {
            this.winner = 'draw'
        } else if (human === 'water' && cat === 'cat') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'cat' && cat === 'cup') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'cup' && cat === 'water') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'cat' && cat === 'water') {
            this.winner = cat
            this.catPlayer.wins += 1
        } else if (human === 'cup' && cat === 'cat') {
            this.winner = cat
            this.catPlayer.wins += 1
        } else if (human === 'cup' && cat === 'water') {
            this.winner = cat
            this.catPlayer.wins +=1
        }
    }

    playHardGame() {
        var human = this.humanPlayer.playerChoice
        var cat = this.catPlayer.playerChoice

        if (human === 'water' && cat ==='cat' || 'yarn') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'cat' && cat === 'cup' || 'yarn') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'cup' && cat === 'water' || 'dog') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'yarn' && cat === 'cup' || 'dog') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'dog' && cat === 'water' || 'cat') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (cat === 'water' && dog === 'cat' || 'yarn') {
            this.winner =cat
            this.catPlayer.wins += 1
        } else if (cat === 'cat' && human === 'cup' || 'yarn') {
            this.winner = cat
            this.catPlayer.wins += 1
        } else if (cat === 'cup' && human === 'water' || 'dog') {
            this.winner = cat
            this.catPlayer.wins += 1
        } else if (cat === 'yarn' && human === 'cup' || 'dog') {
            this.winner = cat
            this.catPlayer.wins += 1
        } else if (cat === 'dog' && human === 'water' || 'cat') {
            this.winner = cat
            this.catPlayer.wins += 1
        }
    }

}
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game