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

// checking the gamestate against the winningconditions so that a win or draw can be produced
const checkResult = () => {
  const winningMessage = `Player ${currentPlayer} has won!`;
  let roundWon = false;
  let roundDraw = !gameState.includes("");
  // looping through the win combos
  //It will go through each inner array in win conditions
  for (let index = 0; index < winConditions.length; index++) {
    //loop through all the winning combos and check if the result is a win against current gamestate
    // storing each array within a temp variable
    const winCombo = winConditions[index];
    // console.log(winConditions[index])
    let a = gameState[winCombo[0]];
    let b = gameState[winCombo[1]];
    let c = gameState[winCombo[2]];
    // console.log([winCombo[1]]);
    // checking if the gameState values are currently empty or not if they are empty then continue the game until we have a winner or draw
    if (a === "" || b === "" || c === "") continue;
    // if they are not empty spaces then that means the spaces are full and they are the same character e.g "X X X" someone has one
    if (a === b && b === c) {
      roundWon = true;
    }
  }
  // if the conditions are met for a win gameState matches winningconditions alert with winning message with appear + sound
  if (roundWon) {
    winnerSound.play(), alert(winningMessage);
  }
  // console.log(winningMessage);
  if (roundDraw && roundWon === false) {
    drawGameSound.play(), alert(drawMessage);
  }
}
// Getting the cell Id and what box has been clicked
const cellClicked = (event) => {
  playerChange();
  const clickedBoxId = event.target.id;
  const clickedBox = event.target;
  // console.log(event.target);
  // console.log(event.target.id);
  // Store the clicked boxes ID and check if they have been clicked
  // Only want to update the cell if its empty
  if (gameState[clickedBoxId] !== "") {
    return;
  }
  // passing in the cellPlayed function so that the gamestate can be stored
  cellPlayed(clickedBox, clickedBoxId);
  // check the game result against game state each time a cell is clicked
  checkResult();
  clickSound.play();
};



// create a restart function which clears the board (add a click event for the button, once the button is clicked set the boxes to = "" )
const restart = () => {
  boxes.forEach((box) => {
    (box.innerHTML = ""),
      (currentPlayer = ""),
      (gameState = ["", "", "", "", "", "", "", "", ""]);
    statusText.innerHTML = `Player X's turn`;
  });
};


startGame.addEventListener("click", startPlaying);
restartGame.addEventListener("click", restart);
