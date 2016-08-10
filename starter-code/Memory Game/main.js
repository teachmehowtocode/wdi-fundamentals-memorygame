var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";


if (cardTwo === cardFour) {
	alert("Sorry, try again!");
}
else {
	alert("You found a match!");
}


var gameBoard = document.getElementById("game-board");
var createBoard = function () {

	for (var idx = 0; idx < cards.length; idx ++) {
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		gameBoard.appendChild(cardElement);

	}
};

createBoard();
