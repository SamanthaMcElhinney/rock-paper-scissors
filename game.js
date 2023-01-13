class Game {
    constructor(){
        this.humanPlayer = new Player ('human', '👩🏽‍🎤')
        this.catPlayer = new Player ('cat', '😼')
        this.message = undefined;
        this.easyChoices= ['water', 'catPaw', 'cup']
        this.difficultChoices = ['water', 'catPaw', 'cup', 'yarn', 'dog']
        this.winner = undefined;
    }

    playEasyGame(){
        var human = this.humanPlayer.choice
        var cat = this.catPlayer.choice
        if (human === cat) {
            this.winner = 'draw'
        } else if (human === 'water' && cat === 'catPaw') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'water' && cat === 'cup') {
            this.winner = cat
            this.humanPlayer.wins += 1
        } else if (human === 'cup' && cat === 'water') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'cup' && cat === 'catPaw') {
            this.winner = cat
            this.catPlayer.wins += 1
        } else if (human === 'catPaw' && cat === 'cup') {
            this.winner = human
            this.humanPlayer.wins += 1
        } else if (human === 'catPaw' && cat === 'water') {
            this.winner = cat
            this.catPlayer.wins += 1
        }
    }

    playDifficultGame() {
        var human = this.humanPlayer.choice
        var cat = this.catPlayer.choice

        if (human === 'water' && cat ==='catPaw' || 'yarn') {
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
