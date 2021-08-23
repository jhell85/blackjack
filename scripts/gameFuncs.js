// Game functions
const populateDeck = () => {
  let deck = Array();
  for (card in cardDeck) {
    deck.push(card);
  }
  return deck;
};

const dealCard = (deck) => {
  const index = Math.floor(Math.random() * deck.length);
  const card = deck[index];
  deck.splice(index, 1);
  return card;
};

const dealHands = (deck) => {
  counter = 0;
  while (counter < 2) {
    userHand.push(dealCard(deck));
    dealerHand.push(dealCard(deck));
    counter++;
  }
  return [userHand, dealerHand];
};

const addHand = (hand) => {
  sum = 0;
  hand.forEach((card) => {
    sum += cardDeck[card];
  });
  return sum;
};

const countAces = (hand) => {
  let aces = 0;
  hand.forEach((card) => {
    if (card.charAt(0) == "A") {
      aces++;
    }
  });
  return aces;
};

const evaluateAces = (total, aces) => {
  if (!aces) return total;
  // No Aces means no change in the total
  if (total > 11) {
    // return the total because if your hand is 11 or more you wouldn't want an Ace to be worth 11
    return total;
  }
  //  only add 10 because an Ace is already counted as 1. If you had more then 1 Ace
  //  you would only want 1 Ace counted as 11 because any more and you would bust
  return total + 10;
};
