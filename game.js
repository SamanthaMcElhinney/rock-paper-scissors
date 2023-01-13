class Game {
  constructor() {
    this.humanPlayer = new Player("human", "👩🏽‍🎤");
    this.catPlayer = new Player("cat", "😼");
    this.message = undefined;
    this.gameType;
    this.choices = [];
    this.winner = undefined;
  }

  gamemode(gameType) {
    this.gameType = gameType;
    if (this.gameType === "easy") {
      this.choices = ["water", "catPaw", "cup"];
    } else if (this.gameType === "hard") {
      this.choice = ["water", "catPaw", "cup", "yarn", "dog"];
    }
  }

  catChoice() {
    this.catPlayer.choice =
      this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  humanChoice(target) {
    this.humanPlayer.choice = target;
  }

  playEasyGame() {
    var human = this.humanPlayer.choice;
    var cat = this.catPlayer.choice;
    if (human === cat) {
      this.winner = "draw";
    } else if (human === "water" && cat === "catPaw") {
      this.winner = human;
      this.humanPlayer.wins++;
    } else if (human === "cup" && cat === "water") {
      this.winner = human;
      this.humanPlayer.wins++;
    } else if (human === "catPaw" && cat === "cup") {
      this.winner = human;
      this.humanPlayer.wins += 1;
    } else {
      this.winner = cat;
      this.catPlayer.wins += 1;
    }
  }

  playDifficultGame() {
    var human = this.humanPlayer.choice;
    var cat = this.catPlayer.choice;

    if (human === cat) {
      this.winner = "draw";
    } else if (human === "water" && (cat === "catPaw" || "yarn")) {
        this.winner = human;
        this.humanPlayer.wins += 1;
    }else if (human === "cat" && (cat === "cup"|| "yarn")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
    } else if (human === "cup" && (cat === "water" || "dog")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
    } else if (human === "yarn" && (cat === "cup" || "dog")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
    } else if (human === "dog" && (cat === "water" || "cat")) {
      this.winner = human;
      this.humanPlayer.wins += 1;
    } else if (cat === "water" && (dog === "cat" || "yarn")) {
      this.winner = cat;
      this.catPlayer.wins += 1;
    } else if (cat === "cat" && (human === "cup" || "yarn")) {
      this.winner = cat;
      this.catPlayer.wins += 1;
    } else if (cat === "cup" && (human === "water" || "dog")) {
      this.winner = cat;
      this.catPlayer.wins += 1;
    } else if (cat === "yarn" && (human === "cup" || "dog")) {
      this.winner = cat;
      this.catPlayer.wins += 1;
    } else if (cat === "dog" && (human === "water" || "cat")) {
      this.winner = cat;
      this.catPlayer.wins += 1;
    }
  }
}
