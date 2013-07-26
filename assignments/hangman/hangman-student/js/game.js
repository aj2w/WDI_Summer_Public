var word = {
  secretWord: "",
  correctLetters: [],
  incorrectLetters: [],
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

// Selects a random word from the word list sets the secret word
setSecretWord: function(){
  this.secretWord = this.wordList[_.random(0,this.wordList.length)];
},

// Takes an array of letters as input and returns an array of two items:
// 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
// 2) An array of all the guessed letters that were not in the secret word
checkLetters: function(letterGuess){
  // this.correctLetters = [];
  var incorrectLetters = [];
  if (_.contains(this.secretWord, letterGuess) === true) {
    this.correctLetters.push(letterGuess);
  } else if (_.contains(this.secretWord, letterGuess) === false) {
    this.incorrectLetters.push(letterGuess);
  }
}
};

var player = {
  MAX_GUESSES: 8,

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    var letterGuess = prompt("Please guess a letter") // needs to be changed to the game function DOM later on
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    // if wordString == secretWord ==> WIN!!!!
    // use match function in underscore
  },

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
    if (word.incorrectLetters.length > MAX_GUESSES) {
      console.log("You have lost") //refine this message
    }
  }
};

var game = {
  // Resets the game
  resetGame: function(){
    // reset the variables to blank
  },

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    // show secretWord, trigger a frowny face or something to signify loss
  },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){

  }
};

window.onload = function(){
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};