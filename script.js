let squares = document.querySelectorAll(".game__squares");
let gameTurn = 0;
let turnCounter = document.querySelector(".game__turn_counter");
let gameReset = document.querySelector(".game__reset");

for (i = 0; i < squares.length; i++) {
  squares[i].setAttribute("id", i + 1);
  let color = squares[i].color;
  function turnFunction() {
    gameTurn += 1;
    if (color === "red" || color === "blue") {
      gameTurn -= 1;
      alert("That square has been picked, pick another!");
    } else if (gameTurn % 2 === 0 && gameTurn < 9) {
      this.classList.add("red");
      color = "red";
      turnCounter.innerHTML = "Blue's Turn";
    } else if (color !== "red" && gameTurn < 9) {
      this.classList.add("blue");
      color = "blue";
      turnCounter.innerHTML = "Red's Turn";
    }
    if (gameTurn >= 9) {
      this.classList.add("blue");
      turnCounter.innerHTML = "GAME OVER!";
    }
  }
  squares[i].addEventListener("click", turnFunction);
}

// gameReset.addEventListener("click", resetGame);
//   function resetGame(e) {
//     e.preventDefault();
//     gameTurn = 0;
//     this.target.classList.remove("blue");
//     this.target.classList.remove("red");
//   }
//Step 1: Check to see who's turn it is (build that function)
//Step 2: On a click in the square, turn it red or blue depending on who's turn it is
//Step 3: Have the turns switch after every click
//Step 4: Build a function that calculates who won or lost (put all winning combinations into an array)
//Step 5: Announce the winner
