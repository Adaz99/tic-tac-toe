const boxes = document.querySelectorAll(".box");
const restartGame = document.querySelector(".restart");
const startGame = document.querySelector(".startGame");
const statusText = document.querySelector(".statusText");
const music = document.querySelector(".musicForGame");


let currentPlayer = "O";

const drawMessage = `Game is a draw!`;
// gameState which allows the current game which is being play to be stored
let gameState = ["", "", "", "", "", "", "", "", ""];

// display win conditions in an array so we can check against gameState array
const winConditions = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];