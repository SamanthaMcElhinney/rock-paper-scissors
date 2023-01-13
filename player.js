class Player {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
        this.choice = undefined;
        this.wins = 0
    };
    takeTurn(choiceArray, playerChoice) {
        if (this.name === "human") { 
            this.choice = playerChoice;
        } else if (this.name === "cat") { 
            var randomIndex = Math.floor(Math.random() * choiceArray.length);
            var randomChoice = choiceArray[randomIndex];
            this.choice = randomChoice;
        };
    };
};
// GameBoard:
// // A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game