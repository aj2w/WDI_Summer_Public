var word = {
  secretWord: "",
  correctLetters: [],
  guessedLetters: [],
  secretWordWithBlanks: "",

  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

// Selects a random word from the word list sets the secret word
setSecretWord: function(){
  this.secretWord = this.wordList[_.random(0,this.wordList.length)];
},

// Generates a word of underscores of same length as secretWord
createSecretWordWithBlanks: function(){
  for (var i = 0; i < this.secretWord.length; i++) {
    this.secretWordWithBlanks += "_";
    this.secretWordWithBlanks.trim();
  }
},

// Checks if letterGuess matches a letter in secretWord and replaces that same letter in secretWordWithBlanks
wordProgress: function(letterGuess){
  for (var i = 0; i < this.secretWord.length; i++) {
    var temp =  this.secretWordWithBlanks.split("");
    if (this.secretWord[i] === letterGuess) {
      temp[i] = letterGuess;
      this.secretWordWithBlanks = temp.join("");
    }
  }
  this.guessedLetters.push(letterGuess);
}
};



var player = {
  MAX_GUESSES: 8,
  numGuesses: 8,
  letterGuess: "",

// Takes a new letter as input and updates the game
makeGuess: function(letter){
  this.letterGuess = document.getElementById("letterField").value;
  this.numGuesses = this.numGuesses - 1;
  document.getElementById("letterField").value = "";
},

// Check if the player has won and end the game if so
checkWin: function(wordString){
  if (word.secretWordWithBlanks === word.secretWord) {
    document.getElementById("wordString").innerHTML = "You've won!";
  }
},

// Check if the player has lost and end the game if so
checkLose: function(){
  if (this.numGuesses === 0) {
    document.getElementById("wordString").innerHTML = "You lost!";
  }
}
};



var game = {
// Resets the game
resetGame: function(){
  word.secretWord = "";
  word.secretWordWithBlanks = "";
  word.setSecretWord();
  word.createSecretWordWithBlanks();
  document.getElementById("wordString").innerHTML = word.secretWordWithBlanks;
},

// Reveals the answer to the secret word and ends the game
giveUp: function(){
  document.getElementById("wordString").innerHTML = word.secretWord;
},

// Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
updateDisplay: function(secretWordWithBlanks, guessedLetters, numGuesses){
  document.getElementById("lettersUsed").innerHTML = "Letters Guessed Already: "+word.guessedLetters+ " ";
  document.getElementById("wordString").innerHTML = word.secretWordWithBlanks;
  document.getElementById("guessesLeft").innerHTML = player.numGuesses;
  player.checkWin();
  player.checkLose();
}
};



window.onload = function(){
  word.setSecretWord();
  word.createSecretWordWithBlanks();
  document.getElementById("wordString").innerHTML = word.secretWordWithBlanks;
  document.getElementById("guessesLeft").innerHTML = player.numGuesses;

document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==13) {
  player.makeGuess(); //assigns letter to player.letterGuess
    word.wordProgress(player.letterGuess); //checks letter against secretWord
    game.updateDisplay(word.secretWordWithBlanks,word.guessedLetters);

  }
}

  document.getElementById("giveUpButton").onclick = function(event) {
    game.giveUp();
  };

  document.getElementById("resetButton").onclick = function(event) {
    game.resetGame();
  }
};