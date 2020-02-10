let gameSquares = document.querySelectorAll(".game__squares");
console.log(gameSquares);
gameSquares.addEventListener("click", turnFunction);
function turnFunction(e) {
  e.preventDefault();
  console.log("Clicked!");
}
//Step 1: Check to see who's turn it is (build that function)
//Step 2: On a click in the square, turn it red or blue depending on who's turn it is
//Step 3: Have the turns switch after every click
//Step 4: Build a function that calculates who won or lost (put all winning combinations into an array)
//Step 5: Announce the winner
