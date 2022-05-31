
function cardDeck() {
    const suits = ['C', 'D', 'H', 'S'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    const deck = [];
    for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
        for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
            deck.push(ranks[rankCounter] + suits[suitCounter]);
        }
    }
    return deck;
}
function shuffleDeck(deck) {
    for (var i = 0; i < 52; i++) {
        const tmp = deck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tmp;

    }

}

const runShuffle = cardDeck();
//Using Deck parameter to run the function
shuffleDeck(runShuffle);
//Console logging the array of shuffled cards
console.log(runShuffle);

