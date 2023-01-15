//global variables
var currentGame = new Game ()

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
var computerChoiceContainer = document.querySelector(".computer-choice")

// event listeners
window.addEventListener("load", startGame)
classicGameSelector.addEventListener("click", displayClassicGameIcons)
difficultGameSelector.addEventListener("click", displayDifficultGameIcons)
images.addEventListener("click", function () {
 humanClassicSelection(event);
//  computerChoice()
 updateScore()
 updateMessage()
 resetGame();
})
changeGameButton.addEventListener("click", displayMenu)

function startGame() {
    currentGame = new Game ()
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
        setTimeout(displayClassicGameIcons, 1000)
    } else if (currentGame.gameType === "hard") {
        setTimeout(displayDifficultGameIcons, 1000)
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
        console.log("hi")
        cupIcon.classList.add("hidden");
        catIcon.classList.remove("hidden");
        waterIcon.classList.add("hidden");
        yarnIcon.classList.add("hidden");
        dogIcon.classList.add("hidden"); 
    } else if (event.target.classList.contains("water-img")) {
        currentGame.humanPlayer.choice = "water"
        currentGame.catChoice();
        console.log('yo')
        catIcon.classList.add("hidden");
        cupIcon.classList.add("hidden");
        waterIcon.classList.remove("hidden");
        yarnIcon.classList.add("hidden");
        dogIcon.classList.add("hidden"); 
    } else if (event.target.classList.contains("cup-img")) {
        currentGame.humanPlayer.choice = "cup"
        currentGame.catChoice() 
        console.log("yee")
        catIcon.classList.add("hidden");
        cupIcon.classList.remove("hidden");
        waterIcon.classList.add("hidden");
        yarnIcon.classList.add("hidden");
        dogIcon.classList.add("hidden"); 
    }
    currentGame.playEasyGame()
}

function checkCatChoice(){
    if (currentGame.catChoice === "catPaw") {
        return ''
    }
}

function catChoice() {
    var catChoice = currentGame.catPlayer.choice
    computerChoiceContainer.innerHTML = ''
    computerChoiceContainer.innerHTML +=
        ` <section class="icons"> 
                <img class="computer-choice" src='${catChoice}'>
                <img class="cat-img hidden" src="https://i2.wp.com/ittykitty.com/wp-content/uploads/2020/05/crop-Shutterstock-a-cute-calico-cat-raises-its-paw-against-a-blue-background.jpg?fit=1200%2C686&ssl=1" alt="Image of angry cat with paw about to slap a person">
                <img class="cup-img hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhRq9mxjNOZItALuo3JYFa_qzb11NdUq3Uw&usqp=CAU" alt="orange empty cup">
                <img class="water-img hidden" src="https://www.shutterstock.com/image-photo/colorful-ocean-wave-sea-water-260nw-693783628.jpg" alt="water image">
                <img class="yarn-img hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpQj-s4U51FwE5XNfCnbECiAbg3g-MHRQ0g&usqp=CAU" alt="alien wearing yarn sweater">
                <img class="dog-img hidden" src="https://i.pinimg.com/originals/21/59/c4/2159c493313c6084db38bee8e69a4fab.jpg" alt="ugly dog face image">
            </section>
`
}

function updateScore(){
    winsCounterHuman.innerText = currentGame.humanPlayer.wins
    winsCounterCat.innerText = currentGame.catPlayer.wins
}

function updateMessage(){
    userInstructions.innerText = currentGame.message
}


// function selectGameMode(mode){
//     if (mode ==="easy") {
//         currentGame.gameType = "easy"
//     } else if (mode === "hard") {
//         currentGame.gameType = "hard"
//     }
// }

// function displayGameMode(){
//     userInstructions.innerText = "Choose your fighter!"
//     difficultGameSelector.classList.add('hidden')
//     classicGameSelector.classList.add("hidden")
//     changeGameButton.classList.remove("hidden")
// }