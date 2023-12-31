let boxButton = document.querySelectorAll(".box-btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winnerMsg = document.querySelector("#winner-msg");
let gameBox = document.querySelector("#game");
let msgContainer = document.querySelector("#msg-container");
let turnO = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxButton.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO === true) {
      // turn X player
      box.innerText = "O";
      turnO = false;
    } else {
      //turn O player
      box.innerText = "X";
      turnO = true;
    }
    box.disable = true;
    checkWinner();
  });
});
const resetGame = () => {
  turnO = true;
  enableBoxBtn();
  msgContainer.classList.add("hide");
};

const disableBoxBtn = () => {
  for (let box of boxButton) {
    box.disable = true;
  }
};
const enableBoxBtn = () => {
  for (let box of boxButton) {
    box.disable = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  winnerMsg.innerText = `congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxBtn();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(
    //   boxButton[pattern[0]].innerText,
    //   boxButton[pattern[1]].innerText,
    //   boxButton[pattern[2]].innerText
    // );

    let pos1val = boxButton[pattern[0]].innerText;
    let pos2val = boxButton[pattern[1]].innerText;
    let pos3val = boxButton[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
const newGame = () => {
  let newBtn = addEventListener();
};

// checkWinner();
// checkWinner();
// showWinner(winner);

// resetGame();
// disableBoxBtn();
// enableBoxBtn();
