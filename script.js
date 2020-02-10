let squares = document.querySelectorAll(".game__squares");
let gameTurn = 0;
let turnCounter = document.querySelector(".game__turn_counter");
let gameReset = document.querySelector(".game__reset");
let winningNumbers = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"]
];
let blue = [];
let red = [];

//   if (blue.length === 3 || red.length === 3) {
//     winningNumbers.forEach(winner => {
//       if (winner.includes(...blue.sort())) {
//         alert("Blue Wins!");
//       } else if (winner.includes(...red.sort())) {
//         alert("Red Wins");
//       }
//     });
//   }
// }

for (let i = 0; i < squares.length; i++) {
  squares[i].setAttribute("id", i + 1);
  squares[i].addEventListener("click", turnFunction);
  gameReset.addEventListener("click", resetGame);
}
function turnFunction(evt) {
  gameTurn += 1;
  if (gameTurn % 2 === 0) {
    evt.target.classList.add("red");
    evt.target.innerHTML = "X";
    colorName = "red";
    red.push(evt.target.id);
    turnCounter.innerHTML = "Blue's Turn";
    checkForWinner(red);
  } else if (gameTurn % 2 !== 0) {
    evt.target.classList.add("blue");
    evt.target.innerHTML = "O";
    colorName = "blue";
    blue.push(evt.target.id);
    turnCounter.innerHTML = "Red's Turn";
    checkForWinner(blue);
    console.log("Check");
  }
  if (gameTurn >= 9) {
    evt.target.classList.add("blue");
    evt.target.innerHTML = "O";
    turnCounter.innerHTML = "Game Over!";
  }
  evt.target.removeEventListener("click", turnFunction);
}
function resetGame(e) {
  e.preventDefault();
  gameTurn = 0;
  red = [];
  blue = [];
  turnCounter.style["font-size"] = "30px";
  turnCounter.innerHTML = "Blue's turn";
  turnCounter.style.background = "white";
  squares.forEach(square => square.classList.remove("blue", "red"));
  squares.forEach(square => (square.innerHTML = ""));
  squares.forEach(square => square.addEventListener("click", turnFunction));
}
function checkForWinner(color) {
  for (let i = 0; i < winningNumbers.length; i++) {
    let count = 0;
    for (let j = 0; j < color.length; j++) {
      console.log(color, "color");
      console.log(winningNumbers[i][j], "winningNumbers");
      if (color.includes(winningNumbers[i][j]) === true) {
        count = count + 1;
        if (count === 3) {
          turnCounter.style["font-size"] = "100px";
          turnCounter.style.background = "gold";
          turnCounter.innerHTML = `${colorName} Wins!`;
          //   let rendered = document.querySelector(".rendered");
          //   rendered.classList.add("active");
        }
      }
    }
  }
}

//Step 1: Check to see who's turn it is (build that function)
//Step 2: On a click in the square, turn it red or blue depending on who's turn it is
//Step 3: Have the turns switch after every click
//Step 4: Build a function that calculates who won or lost (put all winning combinations into an array)
//Step 5: Announce the winner
