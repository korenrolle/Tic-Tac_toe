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
rowsArr.forEach((row, index) => {
  row.addEventListener('click', ticTac);
});
function ticTac(e) {
  if (currentChoice === 1) {
    e.target.className = 'noClick1';
    e.target.innerHTML = player1;
    win();
    currentChoice = 2;
    winner1.push(rowsArr.indexOf(e.target));
  } else if (currentChoice === 2) {
    e.target.className = 'noClick2';
    e.target.innerHTML = player2;
    win();
    currentChoice = 1;
    winner2.push(rowsArr.indexOf(e.target));
  }
}
function win() {
  for (let i = 0; i < findWinner.length; i++) {
    let winner = findWinner[i];
    if (winner.every((win) => rowsArr[win].classList.contains('noClick1'))) {
      winnerDisplay.innerHTML = 'Player 1 Wins';
      endGame1();
    } else if (
      winner.every((win) => rowsArr[win].classList.contains('noClick2'))
    ) {
      winnerDisplay.innerHTML = 'Player 2 Wins';
      endGame1();
    } else if (winner1.length + winner2.length === 9) {
      winnerDisplay.innerHTML = 'Its a draw';
      endGame1();
    }
  }
}
function endGame1() {
  document.getElementById('endGame').classList.add('endGame1');
}

function refresh() {
  window.location.reload();
}
