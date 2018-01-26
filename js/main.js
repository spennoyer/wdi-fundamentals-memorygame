var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    result = alert("You found a match!");
  } else {
    result = alert("Sorry, try again.");
  }
}

var flipCard = function (cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();

}

flipCard(0);
flipCard(2);
