const rows = document.querySelectorAll('.box');
rowArr = [];
rows.forEach((row) => {
  rowArr.push(row);
  console.log(rowArr);
});
function startGame() {
  let userChoice = prompt(
    'Would you like to continue the long lasting battle for the Alphabet Crown?',
    'Y/N'
  );
  if (userChoice === 'Y') {
    playGame();
  }
}
startGame();

function startGame() {}
// function colorChange(emptySpace) {
// for (let i = 1; i === rows.length; i++)
//   //   console.log(' Sorry bro..Already occupied');
//   document
//   .getElementsByClassName('board')
//   .addEventListener('click', colorChange);
// }
// console.log(colorChange);

// function gameBoard(row`
// }
//Functions
// A comparison/winning function
// A function that changes the color (on click)
//A reset function
// Fuctions for button
//Player 1/ Player 2 Array
//Create Alert(Prompt) function that is triggered 5 sec after the page loads
