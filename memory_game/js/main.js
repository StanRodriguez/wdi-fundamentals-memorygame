let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
let card1 = cards[0];
let card2 = cards[1];

cardsInPlay.push(card1);

cardsInPlay.push(card2);

if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1] ) {
		console.log('you found a match');
	} else {
		console.log('Sorry, try again.');
	}
}

console.log(cardsInPlay);