let cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
let cardsInPlay = [];

let checkForMatch = (card)=>
// function checkForMatch(card)
{
	 
	card.setAttribute("src", cards[cardId].cardImage);
	 // console.log(cardsInPlay);
	if (cardsInPlay.length ===2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
	
}
//why does not work in es6?
// let flipCard = () =>
function flipCard () {
	 cardId = this.getAttribute('data-id');
	// console.log(this);
	// console.log("User flipped " + cards[cardId].rank);
	// console.log("User flipped " + cards[cardId].suit);
	// console.log("User flipped " + cards[cardId].cardImage);
	console.log(cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch(this);
	
}
let createBoard = () =>{
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard();
document.getElementById("reset").addEventListener("click",function () {
	location.reload();
})

