class Game {
  constructor() {
    this.humanPlayer = new Player("human", "👩🏽‍🎤");
    this.catPlayer = new Player("cat", "😼");
    this.message = undefined;
    this.gameType;
    this.choices = [];
    this.winner = undefined;
  }

  gameMode(gameType) {
    this.gameType = gameType;
    if (this.gameType === "easy") {
      this.choices = ["water", "catPaw", "cup"];
    } else if (this.gameType === "hard") {
      this.choices = ["water", "catPaw", "cup", "yarn", "dog"];
    }
  }

  catChoice() {
    if (this.gameType === "easy") {
        var randomIndex = Math.floor(Math.random() * this.choices.length);
        var randomChoice = this.choices[randomIndex]
        this.catPlayer.choice = randomChoice
    } else if (this.gameType === "hard") {
        var randomIndex = Math.floor(Math.random() * this.choices.length);
        var randomChoice = this.choices[randomIndex]
        this.catPlayer.choice = randomChoice
    }
    return this.catPlayer.choice
  }

  humanChoice(event) {
    this.humanPlayer.choice = event;
}

  playEasyGame() {
    this.gameType = "easy"
    var human = this.humanPlayer.choice;
    var cat = this.catPlayer.choice;
    if (human === cat) {
      this.winner = "draw";
      this.message = "It's a draw"
    } else if (human === "water" && cat === "catPaw") {
      this.winner = human;
      this.humanPlayer.wins ++;
      this.message = "You won!"
    } else if (human === "cup" && cat === "water") {
      this.winner = human;
      this.humanPlayer.wins ++;
      this.message = "You won!";
    } else if (human === "catPaw" && cat === "cup") {
      this.winner = human;
      this.humanPlayer.wins ++
      this.message = "You won!";
    } else {
      this.winner = cat;
      this.catPlayer.wins ++
      this.message = "You lost!";
    }
    return this.message
  }

  playDifficultGame() {
    this.gameType = "hard"
    var human = this.humanPlayer.choice;
    var cat = this.catPlayer.choice;

    if (human === cat) {
      this.winner = "draw";
    } else if (human === "water" && (cat === "catPaw" || "yarn")) {
        this.winner = human;
        this.humanPlayer.wins += 1;
        this.message = "You win!"
    }else if (human === "cat" && (cat === "cup"|| "yarn")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
      this.message = "You win!";
    } else if (human === "cup" && (cat === "water" || "dog")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
      this.message = "You win!";
    } else if (human === "yarn" && (cat === "cup" || "dog")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
      this.message = "You win!";
    } else if (human === "dog" && (cat === "water" || "cat")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
      this.message = "You win!";
    } else {
      this.winner = cat;
      this.catPlayer.wins += 1;
      this.message = "You lost!";
    } 
    return this.message
  }
}

