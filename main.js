const rows = document.querySelectorAll('.box');

rows.forEach((row) => {
  row.addEventListener('click', function ticTac(test) {
    console.log('This works');
  });
});

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
