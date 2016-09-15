//game.js randomly selects word from my word array

var countries = ["russia", "argentina", "japan", "france", "cuba",
					"china", "switzerland", "brazil", "canada", "kenya", "germany", "egypt", "ghana"];

module.exports.word = countries[Math.floor(Math.random() * countries.length)];
