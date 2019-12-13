# Memory Game
This is a simple game which tests a users memory.

## Challenge
Match cards with less moves.

## How to play
There are 16 cards in the game - 8 different cards with 2 matching cards from each one. They are all faced down at the start of the game. On each turn it is allowed to open 2 cards (one at a time). If the cards match, the pair disappears, if not- they close back. The game continues until all pairs disappear. Opening 2 cards at the same time counts as one step.

## Game Behavior
The game randomly shuffles the cards. Player wins once all cards have successfully been matched. When a player wins the game, a modal appears for congratulations and asks for one more game. It tells the player how many moves it took to win the game.

## How I built the Memory Game
I manipulated the DOM with Vanilla JS, altered part of the HTML and also styled the game
* created a deck of cards that shuffles when game is refreshed
* created a counter to count the number of moves made by player
* added effects to cards when they match and are unmatched
* create a pop-up modal when player wins game
