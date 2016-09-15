var Word = require('./word.js');
var countries = require('./game.js');
var inquirer = require('inquirer');

console.log("******************************");
console.log("      LET'S PLAY HANGMAN      ");
console.log("******************************");

var newWord = new Word(countries.word); //this is the random word

newWord.displayBlanks(); //display initial blanks on screen





newWord.playGame(); //start the game