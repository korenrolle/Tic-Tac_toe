const rows = document.querySelectorAll('.box');
const winnerDisplay = document.getElementById('win');
const rowsArr = Array.from(rows);
const player1 = 'X';
const player2 = 'O';
let currentChoice = 1;
let winner1 = [];
let winner2 = [];
const findWinner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

// this is where I mapped to the specific div the will hold the X,O as well as my if statement. Once the player click it stores the index of the specific div they click on in an array that stores it for comparison between the findWinner.
//my if statement is saying that if currentChoice which is the respective players turn then switch the class to a noClick class to stop them from being able to click and target the inner HTML for the letter. After that, run the win fucntion to see if anything matches and then if not, switch back to currentChoice1 which controls the turns.
// Once the pl

rowsArr.map((row, index) => {
  row.addEventListener('click', function ticTac(test) {
    if (currentChoice == 1) {
      row.className = 'noClick1';
      row.innerHTML = player1;
      win();
      currentChoice = 2;
      winner1.push(index);
      console.log(winner1);
    } else if (currentChoice == 2) {
      row.className = 'noClick2';
      row.innerHTML = player2;
      win();
      currentChoice = 1;
      winner2.push(index);
      console.log(winner2);
    }
  });
});
// This is my endGame function. This says that once we find a winner switch the class to the endgame class. I targeted my class specifically  with DOM.
function endGame1() {
  document.getElementById('endGame').className = 'endGame1';
  console.log('game end 1');
}
// This is my win function. This was VERY VERY HARD lol
// This says that if i is less that findWinner.length then keep adding numbers
//
function win() {
  for (let i = 0; i < findWinner.length; i++) {
    let winner = findWinner[i];
    if (winner.every((win) => rowsArr[win].classList.contains('noClick1'))) {
      console.log('player 1 wins');
      winnerDisplay.innerHTML = 'Player 1 Wins';
      endGame1();
    } else if (
      winner.every((win) => rowsArr[win].classList.contains('noClick2'))
    ) {
      console.log('player 2 wins');
      winnerDisplay.innerHTML = 'Player 2 Wins';
      endGame1();
    } else if (winner1.length === 4 || winner2.length === 4) {
      winnerDisplay.innerHTML = 'Its a draw';
      endGame1();
    }
  }
}

function refresh() {
  window.location.reload();
}
