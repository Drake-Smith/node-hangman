var Letter = require('./letter.js');
var letterObj = new Letter();

var correctLetters = [];  //arrays holding the correct or incorrect letters
var incorrectLetters = [];

function Word(word){
	this.word = word;
	this.displayBlanks = function(){  //function will create the initial blank dashes word
		var blankWord = "";
			for(var i = 0; i < this.word.length; i++){
				blankWord += "_";
			}
		console.log("Word: " + blankWord);;
	},
	this.checkIfRightOrWrong = function(guessedLetter){  //function to check if the letter is right or wrong
		//if guessedLetter is inside Word and guessedLetter is not in correctLetters array
		if (this.word.includes(guessedLetter) && correctLetters.indexOf(guessedLetter) == -1){
				correctLetters.push(guessedLetter);
				console.log("");
				console.log("Letters used: " + incorrectLetters);			
				letterObj.displayWord(this.word, correctLetters, true);
		}
		//if guessedLEtter not in word and not in incorrect Letters array
		else if (this.word.includes(guessedLetter) == false && incorrectLetters.indexOf(guessedLetter)== -1){
				incorrectLetters.push(guessedLetter);
				console.log("");
				console.log("Letters used: " + incorrectLetters);
				letterObj.displayWord(this.word, correctLetters, false);
		}
		else if(correctLetters.indexOf(guessedLetter) > -1 || incorrectLetters.indexOf(guessedLetter) > -1){
				console.log("You already guessed that letter. Try again.");
		}
	}
}

module.exports = Word;


