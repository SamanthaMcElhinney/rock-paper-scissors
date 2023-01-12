class Player {
    constructor(){
        this.name = playerName
        this.token = playerToken
        this.wins = 0
        this.playerChoice 
    }

    humanMove(event) {
        this.playerChoice = event.target.value
    }

    computerMove(array){
        var number = Math.floor(Math.random() * array.length)
        this.playerChoice = array[number]
        return this.playerChoice
    }
}

//When the player selects a game choice either classic or difficult
//after you click classic version text changes to choose your fighter with three images. 
//The wins is updated on either human or cat user
//change game takes you back to the initial page.  

//computerMove needs to generate a random number assigned to an array.
//humanMove to assign a value based on what is clicked