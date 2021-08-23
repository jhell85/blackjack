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
