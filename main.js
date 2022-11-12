const rows = document.querySelectorAll('.box');
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
    console.log();
    if (currentChoice == 1) {
      row.innerHTML = player1;
      row.className = 'noClick';
      // compareFn();
      currentChoice = 2;
      winner1.push(index);
      console.log(winner1);
    } else if (currentChoice == 2) {
      row.innerHTML = player2;
      row.className = 'noClick';
      // compareFn();
      currentChoice = 1;
      winner2.push(index);
      console.log(winner2);
    }
  });
});
for (let i = 0; i < findWinner.length; i++) {
  console.log(findWinner[i]);
  // function compareFn(winner1, winner2) {
  if (winner1 === findWinner[i]) {
    console.log('You win player 1');
    // rows.className = 'noClick';
  } else if (winner2 === findWinner[i]) {
    console.log('you win player 2');
    // rows.className = 'noClick';
    // }
  }
}

// }else {
//   element.className = "myStyle";
// }
// rowsObj.addEventListener('click' test))
// document.getElementBy('').addEventListener('click', function (test) {
//   console.log('This works');
// });
// document.querySelectorAll(rows).addEventListener('click',

// row.onClick = function ( {
// test()
// })
// addEventListener;
// console.log('This works');

// function startGame() {
//   let userChoice = prompt(
//     'Would you like to continue the long lasting battle for the Alphabet Crown?',
//     'Y/N'
//   );
//   if (userChoice === 'Y') {
//     playGame();
//   }
// }

// let player = 1;

// let currentChoice = [player1, player2];
// console.log(player1);
// // startGame();
// if
// function playGame() {
//   let player1 = [1, 3, 5, 7, 9]
//   let player2 = [2,4,6,8]

//   }
//   // /if

// for (let i = 1; i === rows.length; i++)
//   console.log(' Sorry bro..Already occupied');
// }
// // function colorChange(emptySpace) {
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

// console.log(findWinner[1]);
// if (findWinner[0]==winner1 || ){

// }

// compareFn();
