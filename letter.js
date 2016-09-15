function Letter(){
	this.guessesLeft = 8;
	this.isGameOver = function(guesses){  //function to determine if guesses are 0 or not
		if (guesses == 0){
			return true;
		} else {
			return false;
		}
	}

}

Letter.prototype.printWord = function(wordString,lettersArr,correctGuess){

	if(!correctGuess && this.isGameOver(this.guessesLeft) == false){
		this.guessesLeft--;
	}

	console.log("Guesses remaining: " + this.guessesLeft);

	var currentWordStatus = "";
	for(var i=0; i< wordString.length; i++){

		if(lettersArr.indexOf(wordString.charAt(i)) !== -1) {
			currentWordStatus += wordString.charAt(i);
		}
		else {
			currentWordStatus += "_";
		}
	}
	console.log(currentWordStatus);

	if(currentWordStatus.indexOf("_") == -1){
		console.log("***************");
		console.log("You won!");
		console.log("***************");
		process.exit();
	}
	if(this.isGameOver(this.guessesLeft) == true){
		console.log("***************");
		console.log("You lost!");
		console.log("The word was: " + wordString);
		console.log("***************");
		process.exit();
	}
};

module.exports = Letter;