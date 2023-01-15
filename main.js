//global variables
var currentGame;

//DOM
var classicGameSelector = document.querySelector("#classic-game-selector")
var difficultGameSelector = document.querySelector("#Difficult-game-selector")
var userInstructions = document.querySelector(".user-instructions");
var catIcon = document.querySelector(".cat-img")
var cupIcon = document.querySelector(".cup-img")
var waterIcon = document.querySelector(".water-img")
var yarnIcon = document.querySelector(".yarn-img")
var dogIcon = document.querySelector(".dog-img")
var changeGameButton = document.querySelector(".change-game");
var winsCounterHuman = document.querySelector("#wins-counter-human")
var winsCounterCat = document.querySelector("#wins-counter-cat");
var images = document.querySelector(".icons")
var computerChoiceContainer = document.querySelector(".player-choice-results");


// event listeners
window.addEventListener("load", startGame)
classicGameSelector.addEventListener("click", displayClassicGameIcons)
difficultGameSelector.addEventListener("click", displayDifficultGameIcons)
images.addEventListener("click", function () {
 humanClassicSelection(event);
  humanClassicSelectionHard(event);
//  computerChoice()
 updateScore()
 updateMessage()
//  checkCatChoice()
 resetGame();
})
changeGameButton.addEventListener("click", displayMenu)

function startGame() {
    currentGame = new Game()
}

function hideImages() {
    catIcon.classList.add("hidden");
    cupIcon.classList.add("hidden");
    waterIcon.classList.add("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden"); 
}

function resetGame() {
    if (currentGame.gameType === "easy") {
        setTimeout(displayClassicGameIcons, 2000)
    } else if (currentGame.gameType === "hard") {
        setTimeout(displayDifficultGameIcons, 2000)
    }
}

function displayMainMenu() {
    userInstructions.innerText = "Choose your game!"
    classicGameSelector.classList.remove("hidden");
    difficultGameSelector.classList.remove("hidden");
    changeGameButton.classList.add("hidden")
}

function displayClassicGameIcons() {
    currentGame.gameMode("easy")
    userInstructions.innerText = "Choose your fighter!";
    catIcon.classList.remove("hidden")
    cupIcon.classList.remove("hidden")
    waterIcon.classList.remove("hidden")
    classicGameSelector.classList.add("hidden")
    difficultGameSelector.classList.add("hidden")
}

function displayDifficultGameIcons() {
    currentGame.gameMode("hard");
    userInstructions.innerText = "Choose your fighter!";
    catIcon.classList.remove("hidden");
    cupIcon.classList.remove("hidden");
    waterIcon.classList.remove("hidden");
    yarnIcon.classList.remove("hidden")
    dogIcon.classList.remove("hidden")
    classicGameSelector.classList.add("hidden");
    difficultGameSelector.classList.add("hidden");
}

function humanClassicSelection(event) {
    if (event.target.classList.contains("cat-img")) {
        currentGame.humanPlayer.choice = "catPaw"
        currentGame.catChoice();
        hideImages()
    } else if (event.target.classList.contains("water-img")) {
        currentGame.humanPlayer.choice = "water"
        currentGame.catChoice();
        hideImages()
    } else if (event.target.classList.contains("cup-img")) {
        currentGame.humanPlayer.choice = "cup"
        currentGame.catChoice() 
        hideImages()
    }
    currentGame.playEasyGame()
}

// function checkCatChoice(){
//     if (currentGame.catChoice === "catPaw") {
//         return "src/crop-Shutterstock-a-cute-calico-cat-raises-its-paw-against-a-blue-background (2).png"
//     } else if (currentGame.catChoice === "cup"){
//         return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhRq9mxjNOZItALuo3JYFa_qzb11NdUq3Uw&usqp=CAU"';
//     } else if (currentGame.catChoice === "water"){
//         return "https://www.shutterstock.com/image-photo/colorful-ocean-wave-sea-water-260nw-693783628.jpg";
//     } else if (currentGame.catChoice === "yarn"){
//         return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpQj-s4U51FwE5XNfCnbECiAbg3g-MHRQ0g&usqp=CAU");
//     } else if (currentGame.catChoice === "dog") {
//         return "https://i.pinimg.com/originals/21/59/c4/2159c493313c6084db38bee8e69a4fab.jpg" 
//     }
// }

function resultsSection() {
    computerChoiceContainer.innerHTML = ''
    hideImages()
    computerChoiceContainer.innerHTML += ` 
    <img class="${currentGame.humanPlayer.choice}" src="${currentGame.humanPlayer.choice}" alt="${currentGame.humanPlayer.choice}">
    <img class="${checkCatChoice()}" src="${checkCatChoice()}.png" alt="${checkCatChoice()}">`;

}
               
function updateScore(){
    winsCounterHuman.innerText = currentGame.humanPlayer.wins
    winsCounterCat.innerText = currentGame.catPlayer.wins
}

function updateMessage(){
    userInstructions.innerText = currentGame.message
}

function humanClassicSelectionHard(event) {
  if (event.target.classList.contains("cat-img")) {
    currentGame.humanPlayer.choice = "catPaw";
    currentGame.gameType = "hard"
    currentGame.catChoice();
    cupIcon.classList.add("hidden");
    catIcon.classList.remove("hidden");
    waterIcon.classList.add("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden");
  } else if (event.target.classList.contains("water-img")) {
    currentGame.humanPlayer.choice = "water";
    currentGame.gameType = "hard";
    currentGame.catChoice();
    catIcon.classList.add("hidden");
    cupIcon.classList.add("hidden");
    waterIcon.classList.remove("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden");
  } else if (event.target.classList.contains("cup-img")) {
    currentGame.humanPlayer.choice = "cup";
    currentGame.gameType = "hard";
    currentGame.catChoice();
    catIcon.classList.add("hidden");
    cupIcon.classList.remove("hidden");
    waterIcon.classList.add("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden");
  } else if (event.target.classList.contains("yarn-img")) {
    currentGame.humanPlayer.choice = "yarn";
    currentGame.gameType = "hard";
    currentGame.catChoice();
    catIcon.classList.add("hidden");
    cupIcon.classList.add("hidden");
    waterIcon.classList.remove("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden");
  } else if (event.target.classList.contains("dog-img")) {
    currentGame.humanPlayer.choice = "dog";
    currentGame.gameType = "hard";
    currentGame.catChoice();
    catIcon.classList.add("hidden");
    cupIcon.classList.remove("hidden");
    waterIcon.classList.add("hidden");
    yarnIcon.classList.add("hidden");
    dogIcon.classList.add("hidden");
  }
  currentGame.playDifficultGame();
}

