
var Letter = require('./letter.js');
var inquirer = require('inquirer');
var correctLetters = [];
var incorrectLetters = [];

var letterInstance = new Letter();

function Word(word){
	this.word = word;
	this.displayBlanks = function(){
		var blankWord = "";
			for(var i = 0; i < this.word.length; i++){
				blankWord += "_";
			}
		console.log("Word: " + blankWord);;
	}	
}

Word.prototype.playGame = function(){
	var self = this;

	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter.",
			name: "letter"
		}
	]).then(function(answer) {

		var letter = answer.letter;

		if (self.word.includes(letter) && correctLetters.indexOf(letter) == -1){
			correctLetters.push(letter);
			console.log("");
			console.log("Letters already used: " + incorrectLetters);			
			letterInstance.printWord(self.word, correctLetters, true);
		}
		else if (self.word.includes(letter) == false && incorrectLetters.indexOf(letter)== -1){
			incorrectLetters.push(letter);
			console.log("");
			console.log("Letters already used: " + incorrectLetters);
			letterInstance.printWord(self.word, correctLetters, false);
		}
		else if(correctLetters.indexOf(letter) > -1 || incorrectLetters.indexOf(letter) > -1){
			console.log("You already guessed that letter! Please try another.");
		}

		self.playGame();
	});
};
module.exports = Word;