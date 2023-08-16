/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const divCard = document.querySelector("#randomCard");

const getDeck = () => {
  const DECKCARDS = {
    "♥": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    "♠": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    "♣": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    "♦": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  };
  return DECKCARDS;
};

let cards = {
  "♥": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♠": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♣": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♦": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
};

const span = document.createElement("span");
const paragraph = document.createElement("p");
const invertedSpan = document.createElement("span");

span.className = "col-12";
paragraph.className = "cardNumber";
invertedSpan.className = "col-12";
invertedSpan.style.transform = "rotate(180deg)";
divCard.append(span, paragraph, invertedSpan);

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomNumber = (array) => {
  return [Math.floor(Math.random() * array.length)];
};

const renderRandomCard = () => {
  if (!Object.keys(cards).length) {
    span.textContent = "Out of Cards";
    paragraph.textContent = "🤡";
    invertedSpan.textContent = "Out of Cards";
    return;
  }

  let randomKey = getRandomItem(Object.keys(cards));
  let indexCard = getRandomNumber(cards[randomKey]);
  let randomCard = cards[randomKey][indexCard];

  randomKey === "♥" || randomKey === "♦"
    ? (divCard.className = "card col-sm-5 col-10 red")
    : (divCard.className = "card col-sm-5 col-10 black");

  span.textContent = `${randomKey}`;
  paragraph.textContent = `${randomCard}`;
  invertedSpan.textContent = `${randomKey}`;

  cards[randomKey].splice(indexCard, 1);
  if (cards[randomKey].length === 0) delete cards[randomKey];
};

const getDeckOfCards = () => {
  cards = getDeck();
  divCard.className = "card col-sm-5 col-10";
  span.textContent = "";
  paragraph.textContent = "";
  invertedSpan.textContent = "";
  return cards;
};

document
  .getElementById("generateCard")
  .addEventListener("click", renderRandomCard, false);

document
  .getElementById("generateDeck")
  .addEventListener("click", getDeckOfCards, false);
