//represents cards in the game
var cards = ['queen', 'queen', 'king', 'king'];

//represents cards when clicked on
var cardsInPlay = [];

//find the gameboard and set it to a variable, 
//so that we can add cards to it
var gameBoard = document.getElementById('game-board');

//function create the board
var createBoard = function() {

//loop through cards array to create elements
  for (var i = 0; i < cards.length; i ++) {

    //create a div element which will be used as a card
    var cardElement = document.createElement('div');

    //give the created element a class name, helps with link styling
    cardElement.className = 'card';

    // this will set the card's 'data-card' to be the element of the array
    // data- attributes are meant to store data about an element that is not
    // tied to a style.
    // i.e. "king"
    cardElement.setAttribute('data-card', cards[i]);

   // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);

    // append the card to the board
    gameBoard.appendChild(cardElement);

  }
}




//checks to see if there are cards in play
var isTwoCards = function() {
   // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  //card's image revealed when clicked
  console.log(this.getAttribute('data-card'));
  //if revealed card is a king
  if (this.getAttribute('data-card') === 'king') {
    //then king image is revealed
    this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2012/04/11/13/47/hearts-28306_960_720.png'>"
  } else {
    //otherwise a queen image is revealed
    this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2012/04/11/15/11/hearts-28425__340.png'>"
  }



  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];

  }
}


//function for if the selected cards match
var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
  alert("You found a match!");
}
else {
  alert("Sorry, try again!");
}
}


createBoard();
