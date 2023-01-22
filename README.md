1. Create a 3x3 array to represent the game board
2. Create a function to check for a win
  - Check all rows, if any row has the same value return that value as the winner
  - Check all columns, if any column has the same value return that value as the winner
  - Check the two diagonals, if any diagonal has the same value return that value as the winner
  - If no winner is found, check if the board is full, if so return "Tie"
3. Create a function to make a move
  - Validate that the chosen position is empty and within the bounds of the board
  - If valid, update the board with the player's symbol
  - Check for a win, if a winner is found return the winner's symbol
  - If no winner is found, check if the board is full, if so return "Tie"



