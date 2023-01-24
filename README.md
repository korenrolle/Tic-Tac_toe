PSEUDO CODE

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

# USERSTORIES

As a player, I want to be able to make a move on the game board so that I can play the game.
As a player, I want to see if I have won the game so that I know when the game is over.
As a player, I want to see if the game has ended in a tie so that I know when the game is over.
As a player, I want to be able to restart the game so that I can play again.
As a player, I want to be notified if I try to make an invalid move so that I can choose a different position.
As a player, I want to be able to play against another player so that I can have a competitive game.
As a player, I want to be able to play against an AI so that I can have a challenging game.
As a player, I want to be able to customize the game board size so that I can play different variations of the game.
As a player, I want to be able to choose my symbol so that I can personalize my game experience.
As a player, I want to be able to save my game progress so that I can resume the game later.

WIREFRAME

![tictactoe](https://user-images.githubusercontent.com/115126618/213927727-fb9bc7a0-6614-4b40-a318-629956d9dea0.png)
