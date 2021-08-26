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

function animationsTest(callback) {
  // Test if ANY/ALL page animations are currently active

  let testAnimationInterval = setInterval(function () {
    if (!$.timers.length) {
      // any page animations finished
      clearInterval(testAnimationInterval);
      callback;
    }
  }, 25);
}

// dom updating functions

// arg aces will either be the number of aces in the dealer's hand or the value of the player's hand with aces
const displayCard = (card, handValue, aces, user = true) => {
  console.log(card, handValue, aces, user);
  const cardUI = document.createElement("span");
  cardUI.innerHTML = card;
  // if it's the down facing card put an Id of 'down-card' on the element
  if (card == `<span class="card back">*</span>`) {
    cardUI.setAttribute("id", "down-card");
  }
  cardUI.classList.add("animated", "fadeInDownBig");
  cardUI.addEventListener("animationend", () => {
    cardUI.classList.remove("fadeInDownBig");
  });
  if (user) {
    playerDiv.appendChild(cardUI);

    if (handValue != aces && aces < 21) {
      cardUI.addEventListener("animationend", (e) => {
        if (e.type == "animationend") {
          playerScoreDiv.innerText = `${handValue} or ${aces}`;
          return new Promise(() => {});
        }
      });
    } else {
      cardUI.addEventListener("animationend", (e) => {
        if (e.type == "animationend") {
          playerScoreDiv.innerText = `${aces}`;
          return new Promise(() => {});
        }
      });
    }
  } else {
    dealerDiv.appendChild(cardUI);
    cardUI.addEventListener("animationend", (e) => {
      if (e.type == "animationend") {
        dealerScoreDiv.innerText = handValue;
        return new Promise(() => {});
      }
    });
  }
  return cardUI;
};

// event functions
const evaluateHandVsDealer1 = () => {
  disableBtns();
  hideGameButtons();
  const userTotal = addHand(userHand);
  const userAces = countAces(userHand);
  const handWithAces = evaluateAces(userTotal, userAces);
  let dealerTotal = addHand(dealerHand);
  let dealerAces = countAces(dealerHand);
  let dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  let dealerDownCard = document.getElementById("down-card");
  dealerDownCard.classList.add("flipOutY");
  dealerDownCard.addEventListener("animationend", () => {
    dealerDownCard.classList.remove("flipOutY"), (dealerDownCard.innerHTML = UIDeck[dealerHand[0]]);
    dealerDownCard.classList.add("flipInY");
  });
  if (userTotal > 21) {
    dealerScoreDiv.innerText = dealerHandWithAces;
    handResults.innerHTML = resultAnimationSelector(`You Busted! 😞`);
    return;
  }
  while (dealerHandWithAces < 17 || (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal)) {
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
    handResults.innerHTML = resultAnimationSelector(`Dealer busted 🥳  🎊 You Win!!! 🎉`, true);
  } else if (dealerHandWithAces > handWithAces) {
    handResults.innerHTML = resultAnimationSelector(`dealer wins 😞 `);
  } else handResults.innerHTML = resultAnimationSelector(`🎊  You Win!!! 🎉`, true);
  enableBtns();
  showGameButtons();
};

const evaluateHandVsDealer = async () => {
  hideGameButtons();
  const userTotal = addHand(userHand);
  const userAces = countAces(userHand);
  const handWithAces = evaluateAces(userTotal, userAces);
  let dealerTotal = addHand(dealerHand);
  let dealerAces = countAces(dealerHand);
  let dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  let dealerDownCard = document.getElementById("down-card");

  const displayHandResults = () => {
    console.log("dipslayHandResults ran");
    if (userTotal > 21) {
      dealerScoreDiv.innerText = dealerHandWithAces;
      handResults.innerHTML = resultAnimationSelector(`You Busted! 😞`);
    } else if (dealerHandWithAces == handWithAces) {
      handResults.innerHTML = resultAnimationSelector(`Push 😒`);
    } else if (handWithAces == 21) {
      handResults.innerHTML = `<div class="animated flip"><h1>21!</h1> \n 🎊  You Win!!! 🎉 <div>`;
    } else if (dealerHandWithAces > 21) {
      handResults.innerHTML = resultAnimationSelector(`Dealer busted 🥳  🎊 You Win!!! 🎉`, true);
    } else if (dealerHandWithAces > handWithAces) {
      handResults.innerHTML = resultAnimationSelector(`dealer wins 😞 `);
    } else handResults.innerHTML = resultAnimationSelector(`🎊  You Win!!! 🎉`, true);
  };

  // const dealOutDealer = () => {
  //   console.log("dealOutDealer ran");
  //   if (dealerHandWithAces < 17 || (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal)) {
  //     const card = dealCard(playDeck);
  //     dealerHand.push(card);
  //     dealerTotal = addHand(dealerHand);
  //     dealerAces = countAces(dealerHand);
  //     dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  //     let UICard = displayCard(UIDeck[card], dealerHandWithAces, dealerAces, false);
  //     UICard.addEventListener("animationend", (e) => {
  //       if (e.type == "animationend") {
  //         dealOutDealer();
  //       }
  //     });
  //   } else {
  //     displayHandResults();
  //     enableBtns();
  //     showStartButton();
  //     return;
  //   }
  // };

  dealerDownCard.classList.add("flipOutY");
  dealerDownCard.addEventListener("animationend", (e) => {
    if (e.type == "animationend") {
      dealerDownCard.classList.remove("flipOutY"), (dealerDownCard.innerHTML = UIDeck[dealerHand[0]]);
      dealerDownCard.classList.add("flipInY");
      dealerDownCard.addEventListener("animationend", (e) => {
        if (e.type == "animationend") {
          // dealOutDealer();

          let dealOut = async () => {
            console.log("deal out is running");
            let counter = 0;
            while (
              dealerHandWithAces < 17 ||
              (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal)
            ) {
              const card = dealCard(playDeck);
              dealerHand.push(card);
              dealerTotal = addHand(dealerHand);
              dealerAces = countAces(dealerHand);
              dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
              console.log("while loop before displayCard", counter);
              await displayCard(UIDeck[card], dealerHandWithAces, dealerAces, false);
              counter++;
              console.log("while loop after displayCard", counter);
            }
            // displayHandResults();
            enableBtns();
            showStartButton();
          };
          dealOut();
        }
      });
    }
  });

  // animationsTest(dealOutDealer());
  // while (dealerHandWithAces < 17 || (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal)) {
  //   const card = dealCard(playDeck);
  //   dealerHand.push(card);
  //   dealerTotal = addHand(dealerHand);
  //   dealerAces = countAces(dealerHand);
  //   dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  //   displayCard(UIDeck[card], dealerTotal, dealerAces, false);
  //   if (dealerHandWithAces == 17 && dealerHandWithAces != dealerTotal) {
  //     console.log(`Dealer has a soft 17, they hit ${dealerHand[-1]}`);
  //   }
  //   dealerTotal = addHand(dealerHand);
  //   dealerAces = countAces(dealerHand);
  //   dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  // }
  // dealerScoreDiv.innerText = dealerHandWithAces;
  // playerScoreDiv.innerText = handWithAces;

  // if (userTotal > 21) {
  //   dealerScoreDiv.innerText = dealerHandWithAces;
  //   handResults.innerHTML = resultAnimationSelector(`You Busted! 😞`);
  //   return;
  // } else if (dealerHandWithAces == handWithAces) {
  //   handResults.innerHTML = resultAnimationSelector(`Push 😒`);
  // } else if (handWithAces == 21) {
  //   handResults.innerHTML = `<div class="animated flip"><h1>21!</h1> \n 🎊  You Win!!! 🎉 <div>`;
  // } else if (dealerHandWithAces > 21) {
  //   handResults.innerHTML = resultAnimationSelector(`Dealer busted 🥳  🎊 You Win!!! 🎉`, true);
  // } else if (dealerHandWithAces > handWithAces) {
  //   handResults.innerHTML = resultAnimationSelector(`dealer wins 😞 `);
  // } else handResults.innerHTML = resultAnimationSelector(`🎊  You Win!!! 🎉`, true);
};

const hitBtnClicked = () => {
  disableBtns();
  const card = dealCard(playDeck);
  userHand.push(card);
  const userTotal = addHand(userHand);
  const userAces = countAces(userHand);
  const handWithAces = evaluateAces(userTotal, userAces);
  let UICard = displayCard(UIDeck[card], userTotal, handWithAces);
  UICard.addEventListener("animationend", () => {
    if (handWithAces >= 21) {
      evaluateHandVsDealer();
    } else {
      enableBtns();
    }
  });
};
hitBtn.addEventListener("click", hitBtnClicked);

const stayBtnClicked = () => {
  // toggleButtonDisplay(true);
  evaluateHandVsDealer();
};
stayBtn.addEventListener("click", stayBtnClicked);

const toggleButtonDisplay = (isShowingGameButtons = false) => {
  if (isShowingGameButtons) {
    hitBtn.removeEventListener("click", hitBtnClicked);
    stayBtn.removeEventListener("click", stayBtnClicked);
    playBtn.addEventListener("click", playBtnClicked);
    setTimeout(() => {
      gameBtnDiv.classList.add("fadeOutUp");
      setTimeout(() => {
        gameBtnDiv.classList.add("hidden");
        playBtnDiv.classList.remove("hidden");
        playBtnDiv.classList.add("fadeInDown");
        gameBtnDiv.classList.remove("fadeOutUp");
        playBtnDiv.addEventListener("animationend", () => {
          playBtnDiv.classList.remove("fadeInDown"), gameBtnDiv.classList.remove("fadeOutUp");
        });
      }, 1000);
    }, 600);
  } else {
    playBtn.removeEventListener("click", playBtnClicked);
    hitBtn.addEventListener("click", hitBtnClicked);
    stayBtn.addEventListener("click", stayBtnClicked);
    playBtnDiv.classList.add("fadeOutUp");
    setTimeout(() => {
      playBtnDiv.classList.add("hidden");
      gameBtnDiv.classList.remove("hidden");
      gameBtnDiv.classList.add("fadeInDown");
      gameBtnDiv.addEventListener("animationend", () => {
        gameBtnDiv.classList.remove("fadeInDown"), playBtnDiv.classList.remove("fadeOutUp");
      });
    }, 1500);
  }
};
const disableBtns = () => {
  hitBtn.removeEventListener("click", hitBtnClicked);
  stayBtn.removeEventListener("click", stayBtnClicked);
  playBtn.removeEventListener("click", playBtnClicked);
};
const enableBtns = () => {
  hitBtn.addEventListener("click", hitBtnClicked);
  stayBtn.addEventListener("click", stayBtnClicked);
  playBtn.addEventListener("click", playBtnClicked);
};
const hideStartButton = () => {
  playBtnDiv.classList.add("fadeOutUp");
  playBtnDiv.addEventListener("animationend", () => {
    playBtnDiv.classList.add("hidden");
    playBtnDiv.classList.remove("fadeOutUp");
  });
};
const showStartButton = () => {
  playBtnDiv.classList.add("fadeInDown");
  playBtnDiv.classList.remove("hidden");
  playBtnDiv.addEventListener("animationend", () => {
    playBtnDiv.classList.remove("fadeOutUp");
  });
};
const hideGameButtons = () => {
  gameBtnDiv.classList.add("fadeOutUp");
  gameBtnDiv.addEventListener("animationend", () => {
    gameBtnDiv.classList.add("hidden");
    gameBtnDiv.classList.remove("fadeOutUp");
  });
};
const showGameButtons = () => {
  gameBtnDiv.classList.add("fadeInDown");
  gameBtnDiv.classList.remove("hidden");
  gameBtnDiv.addEventListener("animationend", () => {
    gameBtnDiv.classList.remove("fadeOutUp");
  });
};

// Start game button
// const playBtnClicked = () => {
//   disableBtns();
//   hideStartButton();
//   playDeck = populateDeck();
//   userHand = Array();
//   dealerHand = Array();

//   playerDiv.innerHTML = "<span/>";
//   playerScoreDiv.innerText = "0";
//   dealerScoreDiv.innerText = "0";
//   dealerDiv.innerHTML = "<span/>";
//   handResults.innerText = "";
//   dealHands(playDeck);
//   // put a check here to see if the user got 21 off the bat then do something to showcase that
//   // toggleButtonDisplay();

//   let userAces = countAces(userHand);
//   let userTotal = addHand(userHand);
//   let handWithAces = evaluateAces(userTotal, userAces);
//   let dealerTotal = addHand(dealerHand);
//   let dealerAces = countAces(dealerHand);
//   let dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
//   let dealerUpCardValue = cardDeck[dealerHand[1]];

//   let card = displayCard(UIDeck["Down"], dealerUpCardValue, dealerAces, false);
//   card.addEventListener("animationend", (e) => {
//     if (e.type == "animationend") {
//       card = displayCard(UIDeck[dealerHand[1]], dealerUpCardValue, dealerAces, false);
//       card.addEventListener("animationend", (e) => {
//         if (e.type == "animationend") {
//           displayCard(UIDeck[userHand[0]], userTotal, handWithAces, true, true);
//           card.addEventListener("animationend", (e) => {
//             if (e.type == "animationend") {
//               displayCard(UIDeck[userHand[1]], userTotal, handWithAces, true, true);
//             }
//           });
//         }
//       });
//     }
//   });

// // setTimeout(() => {
//   displayCard(UIDeck[dealerHand[1]], dealerUpCardValue, dealerAces, false);
// // }, 300);
// setTimeout(() => {
//   displayCard(UIDeck[userHand[0]], userTotal, handWithAces, true, true);
// }, 600);
// setTimeout(() => {
//   displayCard(UIDeck[userHand[1]], userTotal, handWithAces);
// }, 900);

//   console.log("handWithAces", handWithAces);
//   console.log("dealerHandWithAces", dealerHandWithAces);
//   console.log("deck", playDeck);

//   enableBtns();
//   showGameButton();
// };

// Start game button
const playBtnClicked = () => {
  disableBtns();
  hideStartButton();
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
  // toggleButtonDisplay();

  let userAces = countAces(userHand);
  let userTotal = addHand(userHand);
  let handWithAces = evaluateAces(userTotal, userAces);
  let dealerTotal = addHand(dealerHand);
  let dealerAces = countAces(dealerHand);
  let dealerHandWithAces = evaluateAces(dealerTotal, dealerAces);
  let dealerUpCardValue = cardDeck[dealerHand[1]];
  dealerUpCardValue = dealerUpCardValue == 1 ? dealerUpCardValue + 10 : dealerUpCardValue;

  let card = displayCard(UIDeck["Down"], 0, dealerAces, false);
  card.addEventListener("animationend", (e) => {
    if (e.type == "animationend") {
      let card2 = displayCard(UIDeck[dealerHand[1]], dealerUpCardValue, dealerAces, false);
      card2.addEventListener("animationend", (e) => {
        if (e.type == "animationend") {
          let card3 = displayCard(UIDeck[userHand[0]], cardDeck[userHand[0]], cardDeck[userHand[0]], true);
          card3.addEventListener("animationend", (e) => {
            if (e.type == "animationend") {
              let card4 = displayCard(UIDeck[userHand[1]], userTotal, handWithAces);
              card4.addEventListener("animationend", (e) => {
                enableBtns();
                showGameButtons();
              });
            }
          });
        }
      });
    }
  });

  // displayCard(UIDeck["Down"], dealerUpCardValue, dealerAces, false);
  // setTimeout(() => {
  //   displayCard(UIDeck[dealerHand[1]], dealerUpCardValue, dealerAces, false);
  // }, 300);
  // setTimeout(() => {
  //   displayCard(UIDeck[userHand[0]], userTotal, handWithAces, true, true);
  // }, 600);
  // setTimeout(() => {
  //   displayCard(UIDeck[userHand[1]], userTotal, handWithAces);
  // }, 900);
  // enableBtns();
  // showGameButtons();

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
  const winningClassArray = ["backInDown", "backInUp", "fadeInDownBig", "fadeInUpBig", "flipInY", "rotateIn"];
  const i = isWinner ? winningClassArray.length : loosingClassArray.length;
  const randIndex = Math.floor(Math.random() * i);
  const animateClass = isWinner ? winningClassArray[randIndex] : loosingClassArray[randIndex];
  return `<div class="animated ${animateClass}">${text}</div>`;
};
