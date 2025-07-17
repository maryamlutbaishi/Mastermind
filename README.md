# project 1: Mastermind


## Introduction

This project is a digital version of the classic game Mastermind, built using HTML, CSS, and JavaScript. The player tries to guess a 4-digit secret code, with each guess followed by feedback dots showing how close they were. It was a great way to practice using DOM manipulation, array logic, event handling, and game logic in JavaScript.

## Technologies Used

- HTML
- CSS
- JavaScript 

## Game Rules

- The secret code is a 4-digit number generated randomly.
- The player has 10 attempts to guess the code.
- After each guess, the game provides feedback:
  - **Red dot**: Correct number in the correct position.
  - **White dot**: Correct number in the wrong position.
- If the player guesses all four digits correctly in the right order, they win.
- If the player uses all 10 attempts without guessing correctly, they lose.

## Features

- Automatically moves to the next row after entering a full guess.
- Disables previous rows to prevent editing old inputs.
- Shows a winning message when the correct code is guessed.
- Shows a losing message when attempts are over, along with the secret code.
- Reset button to play again.
- Clean and simple UI using CSS grid and styled input fields.

## Difficulties I Faced

One of the hardest parts for me was figuring out how to correctly count:
- How many digits are in the correct **position** (green dots).
- How many digits are correct but in the **wrong place** (red dots).

At first, I was mixing the logic between the two, so the game didn’t give accurate feedback. I had to carefully use temporary arrays to track which numbers were already matched so I don’t double-count anything. It took some time and trial and error, but eventually I understood how to separate the logic and make the feedback work correctly.

## What I Learned

- Working with multiple inputs and looping through them.
- Comparing arrays and managing user input dynamically.
- Using class toggles and styles to create visual feedback.
- Better understanding of how to break problems into smaller steps.

## Future Improvements

- Allow the user to choose difficulty (number of digits or range of numbers).
- Add animations for better feedback.
- Sound effects for correct or wrong guesses.
- Mobile-friendly layout and design.

