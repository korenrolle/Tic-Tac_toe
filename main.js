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

function endGame1() {
  document.getElementById('endGame').className = 'endGame1';
  console.log('game end 1');
}

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
