______________________________________________________  

# rock-paper-scissors   

### Abstract:
Water, Cat, Cup was an application made to simulate the traditional rock-paper-scissors game with a fun twist of a Taylor Swift playing against her cat. There are two levels: classic and difficult. Classic has the option of 3 choices and difficult has the option of 5 choices. This game is played against the computer or cat in this gamem, which generates a random choice. After each round the results of the game are updated and displayed with the user's selected icon and the computer generated icon. The score is updated with a message to the user. You have the option to switch difficulty levels, after the round is completed, and the score will continue to update as you play. 

### Installation Instructions:
1. Fork this `rock-paper-scissors` repository.
1. Open terminal and navigate where you would like to store the application. 
1. Click `SSH` and copy and paste `git clone git@github.com:SamanthaMcElhinney/rock-paper-scissors.git` into your terminal.
1. Type the phrase `open index.html` into your terminal to open the test window of the application.

### Preview of App:

<img width="1440" alt="app preview" src="src/Water, Cat, Cup Preview.png"/>

### Context:

This project was completed independently in approximately 35 hours during week 5 of the Turing program.

### Contributors:
This project was completed by [Samantha](https://github.com/SamanthaMcElhinney)

### Learning Goals:
- Demonstrate the understanding of differences between the data model and DOM with use of "data model first" approach. 
- Write clean and DRY JavaScript including use of class to class interaction.
- Use complex problem solving and logic to independently create the application, without consulting outside sources.
- Capture user events and appropriately delegate those events creating a responsive webpage.
- Use HTML and CSS to replicate a given layout.

### Wins + Challenges:

#### Wins
- This project really helped solidify my understanding between class to class interaction and updating the data model first. I used dev tools to ensure the game was fully functioning, prior to manipulation on the DOM. 
- I furthered my understanding of breaking down complex problems with use of debugger and breaking the problem down line by line with completing all functionality of the app.
- This was the first project we were given more creative freedom and I got to further my understanding of CSS and HTML with use of flexbox.

#### Challenges:
- I had to refactor my code with a breakdown between the methods in my `game` and `player` class, after manipulation of the DOM. I had to first switch and create a method to generate the gamemode for easy or difficult and invoke that function in order to generate a random selection from the correct length of the array.
- Initially after selecting the main page, it would timeout too soon before the user could make their selection and return you to the same page game. I did some further research and added the `clearTimeout()` method to cancel a timeout previously established.
- The biggest challenge was deciding what logic could be reserved for classes and what could live in the `javascript.js` file. I had to refactor several times in order to update the data model first. The `player.js` class was difficult to write a method with this approach, given it is user dependant for user selection. 