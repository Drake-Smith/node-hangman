//initial requires
var Word = require('./word.js');
var countries = require('./game.js');
var inquirer = require('inquirer');  

console.log("*************************************************************");
console.log("          LET'S PLAY COUNTRIES OF THE WORLD HANGMAN          ");
console.log("*************************************************************");

var newWord = new Word(countries.word); //this is the random word

newWord.displayBlanks(); //display initial blanks on screen

var oneTurn = function(newWord){  //runs through one turn function

	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter.",
			name: "letter"
		}
	]).then(function(answer) {

		var guessedLetter = answer.letter; //asign the guessed letter to a variable
		newWord.checkIfRightOrWrong(guessedLetter);  //call Word function to see if letter is in word
		oneTurn(newWord); //run next turn
	});
};

oneTurn(newWord); //initial new game run