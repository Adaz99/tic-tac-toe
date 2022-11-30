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

// startPlaying function which allows "X" or "O" to be displayed using a click function (starts the game when the button is clicked)(allowing each cell/box to be clicked)
const startPlaying = () => {
  boxes.forEach((cells) => {
    cells.addEventListener("click", cellClicked);
    music.volume = 0.1;
    music.play();
  });
};

// Allows to switch from "X" to "O"
// ? if its true to will do the next one
function playerChange() {
  statusText.innerHTML = `Player ${currentPlayer}'s turn`;
  // If the current player is = "X" we will reassign current player with "O" other wise "X" (this allows players to take turns e,g starts with X then O)
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // console.log(currentPlayer);
}


// create a restart function which clears the board (add a click event for the button, once the button is clicked set the boxes to = "" )
const restart = () => {
  boxes.forEach((box) => {
    (box.innerHTML = ""),
      (currentPlayer = ""),
      (gameState = ["", "", "", "", "", "", "", "", ""]);
    statusText.innerHTML = `Player X's turn`;
  });
};