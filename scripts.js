const cardDeck = {
  "King ♣️": 10,
  "King ♠️": 10,
  "King ❤️": 10,
  "King ♦️": 10,
  "Queen ♣️": 10,
  "Queen ♠️": 10,
  "Queen ❤️": 10,
  "Queen ♦️": 10,
  "Jack ♣️": 10,
  "Jack ♠️": 10,
  "Jack ❤️": 10,
  "Jack ♦️": 10,
  "10 ♣️": 10,
  "10 ♠️": 10,
  "10 ❤️": 10,
  "10 ♦️": 10,
  "9 ♣️": 9,
  "9 ♠️": 9,
  "9 ❤️": 9,
  "9 ♦️": 9,
  "8 ♣️": 8,
  "8 ♠️": 8,
  "8 ❤️": 8,
  "8 ♦️": 8,
  "7 ♣️": 7,
  "7 ♠️": 7,
  "7 ❤️": 7,
  "7 ♦️": 7,
  "6 ♣️": 6,
  "6 ♠️": 6,
  "6 ❤️": 6,
  "6 ♦️": 6,
  "5 ♣️": 5,
  "5 ♠️": 5,
  "5 ❤️": 5,
  "5 ♦️": 5,
  "4 ♣️": 4,
  "4 ♠️": 4,
  "4 ❤️": 4,
  "4 ♦️": 4,
  "3 ♣️": 3,
  "3 ♠️": 3,
  "3 ❤️": 3,
  "3 ♦️": 3,
  "2 ♣️": 2,
  "2 ♠️": 2,
  "2 ❤️": 2,
  "2 ♦️": 2,
  "Ace ♣️": 1,
  "Ace ♠️": 1,
  "Ace ❤️": 1,
  "Ace ♦️": 1,
};
const UIDeck = {
  "King ♣️": `<span class='card rank-k clubs'><span class='rank'>K</span><span class='suit'>&clubs;</span></span>`,
  "King ♠️": `<span class='card rank-k spades'><span class='rank'>K</span><span class='suit'>&spades;</span></span>`,
  "King ❤️": `<span class='card rank-k hearts'><span class='rank'>K</span><span class='suit'>&hearts;</span></span>`,
  "King ♦️": `<span class='card rank-k diams'><span class='rank'>K</span><span class='suit'>&diams;</span></span>`,
  "Queen ♣️": `<span class='card rank-q clubs'><span class='rank'>Q</span><span class='suit'>&clubs;</span></span>`,
  "Queen ♠️": `<span class='card rank-q spades'><span class='rank'>Q</span><span class='suit'>&spades;</span></span>`,
  "Queen ❤️": `<span class='card rank-q hearts'><span class='rank'>Q</span><span class='suit'>&hearts;</span></span>`,
  "Queen ♦️": `<span class='card rank-q diams'><span class='rank'>Q</span><span class='suit'>&diams;</span></span>`,
  "Jack ♣️": `<span class='card rank-j clubs'><span class='rank'>J</span><span class='suit'>&clubs;</span></span>`,
  "Jack ♠️": `<span class='card rank-j spades'><span class='rank'>J</span><span class='suit'>&spades;</span></span>`,
  "Jack ❤️": `<span class='card rank-j hearts'><span class='rank'>J</span><span class='suit'>&hearts;</span></span>`,
  "Jack ♦️": `<span class='card rank-j diams'><span class='rank'>J</span><span class='suit'>&diams;</span></span>`,
  "10 ♣️": `<span class='card rank-10 clubs'><span class='rank'>10</span><span class='suit'>&clubs;</span></span>`,
  "10 ♠️": `<span class='card rank-10 spades'><span class='rank'>10</span><span class='suit'>&spades;</span></span>`,
  "10 ❤️": `<span class='card rank-10 hearts'><span class='rank'>10</span><span class='suit'>&hearts;</span></span>`,
  "10 ♦️": `<span class='card rank-10 diams'><span class='rank'>10</span><span class='suit'>&diams;</span></span>`,
  "9 ♣️": `<span class='card rank-9 clubs'><span class='rank'>9</span><span class='suit'>&clubs;</span></span>`,
  "9 ♠️": `<span class='card rank-9 spades'><span class='rank'>9</span><span class='suit'>&spades;</span></span>`,
  "9 ❤️": `<span class='card rank-9 hearts'><span class='rank'>9</span><span class='suit'>&hearts;</span></span>`,
  "9 ♦️": `<span class='card rank-9 diams'><span class='rank'>9</span><span class='suit'>&diams;</span></span>`,
  "8 ♣️": `<span class='card rank-8 clubs'><span class='rank'>8</span><span class='suit'>&clubs;</span></span>`,
  "8 ♠️": `<span class='card rank-8 spades'><span class='rank'>8</span><span class='suit'>&spades;</span></span>`,
  "8 ❤️": `<span class='card rank-8 hearts'><span class='rank'>8</span><span class='suit'>&hearts;</span></span>`,
  "8 ♦️": `<span class='card rank-8 diams'><span class='rank'>8</span><span class='suit'>&diams;</span></span>`,
  "7 ♣️": `<span class='card rank-7 clubs'><span class='rank'>7</span><span class='suit'>&clubs;</span></span>`,
  "7 ♠️": `<span class='card rank-7 spades'><span class='rank'>7</span><span class='suit'>&spades;</span></span>`,
  "7 ❤️": `<span class='card rank-7 hearts'><span class='rank'>7</span><span class='suit'>&hearts;</span></span>`,
  "7 ♦️": `<span class='card rank-7 diams'><span class='rank'>7</span><span class='suit'>&diams;</span></span>`,
  "6 ♣️": `<span class='card rank-6 clubs'><span class='rank'>6</span><span class='suit'>&clubs;</span></span>`,
  "6 ♠️": `<span class='card rank-6 spades'><span class='rank'>6</span><span class='suit'>&spades;</span></span>`,
  "6 ❤️": `<span class='card rank-6 hearts'><span class='rank'>6</span><span class='suit'>&hearts;</span></span>`,
  "6 ♦️": `<span class='card rank-6 diams'><span class='rank'>6</span><span class='suit'>&diams;</span></span>`,
  "5 ♣️": `<span class='card rank-5 clubs'><span class='rank'>5</span><span class='suit'>&clubs;</span></span>`,
  "5 ♠️": `<span class='card rank-5 spades'><span class='rank'>5</span><span class='suit'>&spades;</span></span>`,
  "5 ❤️": `<span class='card rank-5 hearts'><span class='rank'>5</span><span class='suit'>&hearts;</span></span>`,
  "5 ♦️": `<span class='card rank-5 diams'><span class='rank'>5</span><span class='suit'>&diams;</span></span>`,
  "4 ♣️": `<span class='card rank-4 clubs'><span class='rank'>4</span><span class='suit'>&clubs;</span></span>`,
  "4 ♠️": `<span class='card rank-4 spades'><span class='rank'>4</span><span class='suit'>&spades;</span></span>`,
  "4 ❤️": `<span class='card rank-4 hearts'><span class='rank'>4</span><span class='suit'>&hearts;</span></span>`,
  "4 ♦️": `<span class='card rank-4 diams'><span class='rank'>4</span><span class='suit'>&diams;</span></span>`,
  "3 ♣️": `<span class='card rank-3 clubs'><span class='rank'>3</span><span class='suit'>&clubs;</span></span>`,
  "3 ♠️": `<span class='card rank-3 spades'><span class='rank'>3</span><span class='suit'>&spades;</span></span>`,
  "3 ❤️": `<span class='card rank-3 hearts'><span class='rank'>3</span><span class='suit'>&hearts;</span></span>`,
  "3 ♦️": `<span class='card rank-3 diams'><span class='rank'>3</span><span class='suit'>&diams;</span></span>`,
  "2 ♣️": `<span class='card rank-2 clubs'><span class='rank'>2</span><span class='suit'>&clubs;</span></span>`,
  "2 ♠️": `<span class='card rank-2 spades'><span class='rank'>2</span><span class='suit'>&spades;</span></span>`,
  "2 ❤️": `<span class='card rank-2 hearts'><span class='rank'>2</span><span class='suit'>&hearts;</span></span>`,
  "2 ♦️": `<span class='card rank-2 diams'><span class='rank'>2</span><span class='suit'>&diams;</span></span>`,
  "Ace ♣️": `<span class='card rank-a clubs'><span class='rank'>A</span><span class='suit'>&clubs;</span></span>`,
  "Ace ♠️": `<span class='card rank-a spades'><span class='rank'>A</span><span class='suit'>&spades;</span></span>`,
  "Ace ❤️": `<span class='card rank-a hearts'><span class='rank'>A</span><span class='suit'>&hearts;</span></span>`,
  "Ace ♦️": `<span class='card rank-a diams'><span class='rank'>A</span><span class='suit'>&diams;</span></span>`,
  Down: `<span class="card back">*</span>`,
};
// Global vars
let playDeck = Array();
let userHand = Array();
let dealerHand = Array();
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
// Dom elements
let hitBtn = document.getElementById("hit");
let stayBtn = document.getElementById("stay");
let playBtn = document.querySelector(".play");
let gameBtnDiv = document.getElementById("game-buttons");
let playBtnDiv = document.getElementById("play-btn");
let playerDiv = document.getElementById("player");
let dealerDiv = document.getElementById("dealer");
let playerScoreDiv = document.getElementById("player-score");
let dealerScoreDiv = document.getElementById("dealer-score");
let handResults = document.getElementById("game-over");

// dom updating functions

// arg aces will either be the number of aces in the dealer's hand or the value of the player's hand with aces
const displayCard = (card, handValue, aces, user = true) => {
  const cardUI = document.createElement("span");
  cardUI.innerHTML = card;
  // if it's the down facing card put an Id of 'down-card' on the element
  if (card == `<span class="card back">*</span>`) {
    cardUI.setAttribute("id", "down-card");
  }
  if (user) {
    playerDiv.appendChild(cardUI);
    // check to see if user has 21 if so disable hit button and run end game function
    // and if it's 21 or busted only display that value
    if (handValue != aces && aces < 21) {
      playerScoreDiv.innerText = `${handValue} or ${aces}`;
    } else {
      playerScoreDiv.innerText = `${aces}`;
    }
  } else {
    dealerScoreDiv.innerText = handValue;
    dealerDiv.appendChild(cardUI);
  }
};

// event functions
const evaluateHandVsDealer = () => {
  const userTotal = addHand(userHand);
  const userAces = countAces(userHand);
  const handWithAces = evaluateAces(userTotal, userAces);
  let dealerTotal = addHand(dealerHand);
  let dealerAces = countAces(dealerHand);
  let dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  let dealerDownCard = document.getElementById("down-card");
  dealerDownCard.innerHTML = UIDeck[dealerHand[0]];
  if (userTotal > 21) {
    dealerScoreDiv.innerText = dealerHandWithAces;
    handResults.innerHTML = resultAnimationSelector(`You Busted! 😞`);
    return;
  }
  while (
    dealerHandWithAces < 17 ||
    (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal)
  ) {
    const card = dealCard(playDeck);
    dealerHand.push(card);
    dealerTotal = addHand(dealerHand);
    dealerAces = countAces(dealerHand);
    dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
    displayCard(UIDeck[card], dealerTotal, dealerAces, false);
    if (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal) {
      console.log(`Dealer has a soft 17, they hit ${dealerHand[-1]}`);
    }
    dealerTotal = addHand(dealerHand);
    dealerAces = countAces(dealerHand);
    dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  }
  dealerScoreDiv.innerText = dealerHandWithAces;
  playerScoreDiv.innerText = handWithAces;
  if (dealerHandWithAces == handWithAces) {
    handResults.innerHTML = resultAnimationSelector(`Push 😒`);
  } else if (handWithAces == 21) {
    handResults.innerHTML = `<div class="animated flip"><h1>21!</h1> \n 🎊  You Win!!! 🎉 <div>`;
  } else if (dealerHandWithAces > 21) {
    handResults.innerHTML = resultAnimationSelector(
      `Dealer busted 🥳  🎊 You Win!!! 🎉`,
      true
    );
  } else if (dealerHandWithAces > handWithAces) {
    handResults.innerHTML = resultAnimationSelector(`dealer wins 😞 `);
  } else handResults.innerHTML = resultAnimationSelector(`🎊  You Win!!! 🎉`, true);
};

const hitBtnClicked = () => {
  const card = dealCard(playDeck);
  userHand.push(card);
  const userTotal = addHand(userHand);
  const userAces = countAces(userHand);
  const handWithAces = evaluateAces(userTotal, userAces);
  displayCard(UIDeck[card], userTotal, handWithAces);
  if (handWithAces >= 21) {
    evaluateHandVsDealer();
    toggleButtonDisplay(true);
  }
};
hitBtn.addEventListener("click", hitBtnClicked);

const stayBtnClicked = () => {
  toggleButtonDisplay(true);
  evaluateHandVsDealer();
};
stayBtn.addEventListener("click", stayBtnClicked);

const toggleButtonDisplay = (isShowingGameButtons = false) => {
  if (isShowingGameButtons) {
    hitBtn.removeEventListener("click", hitBtnClicked);
    stayBtn.removeEventListener("click", stayBtnClicked);
    gameBtnDiv.classList.add("animated", "fadeOutUp");
    setTimeout(() => {
      gameBtnDiv.classList.add("hidden");
      playBtnDiv.classList.remove("hidden");
      playBtnDiv.classList.add("animated", "fadeInDown");
      gameBtnDiv.classList.remove("animated", "fadeOutUp");
    }, 1000);
  } else {
    hitBtn.addEventListener("click", hitBtnClicked);
    stayBtn.addEventListener("click", stayBtnClicked);
    gameBtnDiv.classList.remove("hidden");
    playBtnDiv.classList.add("hidden");
  }
};

// Start game button
const playBtnClicked = () => {
  playDeck = populateDeck();
  userHand = Array();
  dealerHand = Array();

  playerDiv.innerHTML = "<span/>";
  playerScoreDiv.innerText = "0";
  dealerScoreDiv.innerText = "0";
  dealerDiv.innerHTML = "<span/>";
  handResults.innerText = "";

  dealHands(playDeck);
  // put a check here to see if the user got 21 off the bat then do something to showcase that
  toggleButtonDisplay();

  let userAces = countAces(userHand);
  let userTotal = addHand(userHand);
  let handWithAces = evaluateAces(userTotal, userAces);
  let dealerTotal = addHand(dealerHand);
  let dealerAces = countAces(dealerHand);
  let dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  let dealerUpCardValue = cardDeck[dealerHand[1]];
  displayCard(UIDeck["Down"], dealerUpCardValue, dealerAces, false);
  displayCard(UIDeck[dealerHand[1]], dealerUpCardValue, dealerAces, false);
  displayCard(UIDeck[userHand[0]], userTotal, handWithAces);
  displayCard(UIDeck[userHand[1]], userTotal, handWithAces);

  console.log("handWithAces", handWithAces);
  console.log("dealerHandWithAces", dealerHandWithAces);
  console.log("deck", playDeck);
};
playBtn.addEventListener("click", playBtnClicked);

const resultAnimationSelector = (text, isWinner = false) => {
  const loosingClassArray = [
    "wobble",
    "fadeInDownBig",
    "rollIn",
    // "hinge",
    "rotateInUpRight",
  ];
  const winningClassArray = [
    "heartBeat",
    "backInDown",
    "backInUp",
    "fadeInDownBig",
    "fadeInUpBig",
    "flipInY",
    "rotateIn",
  ];
  const i = isWinner ? winningClassArray.length : loosingClassArray.length;
  const randIndex = Math.floor(Math.random() * i);
  const animateClass = isWinner
    ? winningClassArray[randIndex]
    : loosingClassArray[randIndex];
  return `<div class="animated ${animateClass}">${text}</div>`;
};
