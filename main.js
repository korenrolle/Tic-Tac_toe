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
// const compareFn = (winner1, findWinner) => {
//   return JSON.stringify(winner1) === JSON.stringify(findWinner);
// };
// console.log(compareFn(winner2, findWinner));

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
// let win = findWinner[i]
function endGame() {
  document.getElementById('endGame').className = 'endGame1';
}
function endGame2() {
  document.getElementById('endGame').className = 'endGame2';
}
function win() {
  for (let i = 0; i < findWinner.length; i++) {
    let winner = findWinner[i];
    if (winner.every((win) => rowsArr[win].classList.contains('noClick1'))) {
      endGame();
    } else if (
      winner.every((win) => rowsArr[win].classList.contains('noClick2'))
    ) {
      endGame2();
    }
  }
}

// if((...win)==(...winner1)){console.log("Finally")}
// function compareFn(winner1, winner2) {
// if () {
//   console.log('You win player 1');
//   // rows.className = 'noClick';
// } else if (JSON.stringify(winner2) == JSON.stringify(findWinner[i])) {
//   console.log('you win player 2');
//   // rows.className = 'noClick';
// }
// }
// //   const compareFn = (winner1, findWinner) => {
// //     return winner1.toString() === findWinner[i].toString();
// //   };
// // });

// //     for (var i = 0; i < a.length; i++) {
// //       if (a[i] !== b[i]) {
// //         return false;
// //       }
// //     }
// //     return true;
// //   }
// // };

// // }else {
// //   element.className = "myStyle";
// // }
// // rowsObj.addEventListener('click' test))
// // document.getElementBy('').addEventListener('click', function (test) {
// //   console.log('This works');
// // });
// // document.querySelectorAll(rows).addEventListener('click',

// // row.onClick = function ( {
// // test()
// // })
// // addEventListener;
// // console.log('This works');

// // function startGame() {
// //   let userChoice = prompt(
// //     'Would you like to continue the long lasting battle for the Alphabet Crown?',
// //     'Y/N'
// //   );
// //   if (userChoice === 'Y') {
// //     playGame();
// //   }
// // }

// // let player = 1;

// // let currentChoice = [player1, player2];
// // console.log(player1);
// // // startGame();
// // if
// // function playGame() {

// //   }
// //   // /if

// // for (let i = 1; i === rows.length; i++)
// //   console.log(' Sorry bro..Already occupied');
// // }
// // // function colorChange(emptySpace) {
// if (
//   findWinner[i][0] == winner1[0] &&
//   findWinner[i][1] == winner1[1] &&
//   findWinner[i][2] == winner1[2]
// ) {
//   console.log('finally');
// } else if (
//   findWinner[i][0] == winner2[0] &&
//   findWinner[i][1] == winner2[1] &&
//   findWinner[i][2] == winner2[2]
// ) {
//   console.log('finally 2');
// }
// // for (let i = 1; i === rows.length; i++)
// //   //   console.log(' Sorry bro..Already occupied');
// //   document
// //   .getElementsByClassName('board')
// //   .addEventListener('click', colorChange);
// // }
// // console.log(colorChange);

// // function gameBoard(row`
// // }
// //Functions
// // A comparison/winning function
// // A function that changes the color (on click)
// //A reset function
// // Fuctions for button
// //Player 1/ Player 2 Array
// //Create Alert(Prompt) function that is triggered 5 sec after the page loads

// // console.log(findWinner[1]);
// // if (findWinner[0]==winner1 || ){

// // }

// // compareFn();
