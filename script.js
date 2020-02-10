let squares = document.querySelectorAll(".game__squares");
let gameTurn = 0;
let turnCounter = document.querySelector(".game__turn_counter");
let gameReset = document.querySelector(".game__reset");
let winningNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
let blue = [];
let red = [];

winningNumbers.forEach(winner => {
  if (winner === blue) {
    alert("Blue Wins!");
  } else if (winner === red) {
    alert("Red Wins");
  }
});

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
    red.push(parseInt(evt.target.id));
    turnCounter.innerHTML = "Blue's Turn";
  } else if (gameTurn % 2 !== 0) {
    evt.target.classList.add("blue");
    evt.target.innerHTML = "O";
    blue.push(parseInt(evt.target.id));
    turnCounter.innerHTML = "Red's Turn";
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
  squares.forEach(square => square.classList.remove("blue", "red"));
  squares.forEach(square => (square.innerHTML = ""));
  squares.forEach(square => square.addEventListener("click", turnFunction));
}

//Step 1: Check to see who's turn it is (build that function)
//Step 2: On a click in the square, turn it red or blue depending on who's turn it is
//Step 3: Have the turns switch after every click
//Step 4: Build a function that calculates who won or lost (put all winning combinations into an array)
//Step 5: Announce the winner
