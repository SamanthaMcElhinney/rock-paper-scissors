//global variables
var currentGame = new Game

var classicGameSelector = document.querySelector("#classic-game-selector")
var difficultGameSelector = document.querySelector("#Difficult-game-selector")
var userInstructions = document.querySelector(".user-instructions");
var catIcon = document.querySelector(".cat-img")
var cupIcon = document.querySelector(".cup-img")
var waterIcon = document.querySelector(".water-img")
var yarnIcon = document.querySelector(".yarn-img")
var dogIcon = document.querySelector(".dog-img")
var changeGameButton = document.querySelector("#change-game")
var winsCounterHuman = document.querySelector("#wins-counter-human")
var winsCounterCat = document.querySelector("#wins-counter-cat");
var images = document.querySelector(".icons")

// event listeners
window.addEventListener("load", startGame)
classicGameSelector.addEventListener("click", displayClassicGameIcons)
difficultGameSelector.addEventListener("click", displayDifficultGameIcons)
images.addEventListener("click", runGame)
changeGameButton.addEventListener("click", displayMenu)

function startGame() {
    currentGame = new Game
}

function hideImages() {
    catIcon.classList.add("hidden");
    cupIcon.classList.add("hidden");
    waterIcon.classList.add("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden"); 
}

function displayMainMenu() {
    userInstructions.innerText = "Choose your game!"
    classicGameSelector.classList.remove("hidden");
    difficultGameSelector.classList.remove("hidden");
    changeGameButton.classList.add("hidden")
}

function displayClassicGameIcons() {
    userInstructions.innerText = "Choose your fighter!";
    catIcon.classList.remove("hidden")
    cupIcon.classList.remove("hidden")
    waterIcon.classList.remove("hidden")
    classicGameSelector.classList.add("hidden")
    difficultGameSelector.classList.add("hidden")
}

function displayDifficultGameIcons() {
    userInstructions.innerText = "Choose your fighter!";
    catIcon.classList.remove("hidden");
    cupIcon.classList.remove("hidden");
    waterIcon.classList.remove("hidden");
    yarnIcon.classList.remove("hidden")
    dogIcon.classList.remove("hidden")
    classicGameSelector.classList.add("hidden");
    difficultGameSelector.classList.add("hidden");
}

function runGame(target) {
    currentGame.humanPlayer.humanChoice(target)
    compareResults()
}

function resetGame() {
    if (currentGame.gameType === "easy") {
        setTimeout(displayClassicGameIcons, 3000)
    } else if (!currentGame.gameType === "hard") {
        setTimeout(displayDifficultGameIcons, 3000)
    }
}


function playEasyGameHuman(event) {
    if (event.target.classList.contains("cat-img")) {
        game.humanPlayer = "catPaw"
    } else if (event.target.classList.contains("water-img")) {
        game.humanPlayer = "water"
    } else if (event.target.classList.contains("cup-img")) {
        game.humanPlayer = "cup"
    }
}

function displayGameMode(){
    userInstructions.innerText = "Choose your fighter!"
    difficultGameSelector.classList.add('hidden')
    classicGameSelector.classList.add("hidden")
    changeGameButton.classList.remove("hidden")
}