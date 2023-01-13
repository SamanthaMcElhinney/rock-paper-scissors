var currentGame
var classicGameSelector = document.querySelector("#classic-game-selector")
var difficultGameSelector = document.querySelector("#Difficult-game-selector")
var userInstructions = document.querySelector(".user-instructions");
var catIcon = document.querySelector(".cat-img")
var cupIcon = document.querySelector(".cup-img")
var waterIcon = document.querySelector(".water-img")
var yarnIcon = document.querySelector(".yarn-img")
var dogIcon = document.querySelector(".dog-img")
var changeGameButton = document.querySelector("#change-game")

//event listeners
window.addEventListener("load", startGame)
classicGameSelector.addEventListener("click", displayClassicGameIcons)
difficultGameSelector.addEventListener("click", displayDifficultGameIcons)

function startGame() {
    currentGame = new Game
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
}

// function displayGameMode(){
//     userInstructions.innerText = "Choose your fighter!"
//     difficultGameSelector.classList.add('hidden')
//     classicGameSelector.classList.add("hidden")
//     changeGameButton.classList.remove("hidden")
// }