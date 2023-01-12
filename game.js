class Game {
    constructor(){
        this.humanPlayer = new Player ()
        this.catPlayer = new Player ()
        this.wins = []
        this.gameType = true
        this.classicChoices = ['water', 'cat', 'cup']
        this.difficultChoices = ['water', 'cat', 'cup', 'yarn', 'dog']
    }

    classicChoices(){
        var playerChoice = this.humanPlayer.playerChoice
        var computerChoice = this.catPlayer.playerChoice
    }
}
