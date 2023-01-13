class Player {
    constructor(playerName, playerIcon){
        this.name = playerName
        this.icon = playerIcon
        this.wins = 0
        this.playerChoice
    }

    // takeTurn()

    randomChoice(choiceArray){
        var randomIndex = Math.floor(Math.random() * choiceArray.length)
        return this.playerChoice[randomIndex]
    }

    updateChoice(playerChoice){
        if(this.name === 'human') {
            this.playerChoice = playerChoice
        } else {
            this.randomChoice()
        }
    }
}

//When the player selects a game choice either classic or difficult
//after you click classic version text changes to choose your fighter with three images. 
//The wins is updated on either human or cat user
//change game takes you back to the initial page.  

//computerMove needs to generate a random number assigned to an array.
//humanMove to assign a value based on what is clicked