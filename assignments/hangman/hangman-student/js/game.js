var word = {
<<<<<<< HEAD
  // This is an attribute of the object word.
  secretWord: "model",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // START HERE: Step 1
  // Selects a random word from the word list sets the secret word
  // it will set the secretWord attribute from Line 3
  setSecretWord: function(){
    //this.secretWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },

  // This feels pretty hard- what can we do to make it easier, or fake it for the moment?
  // How do we deal with multiple, multiple occurrances of letters (ie. google)?
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and an underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word. This is my 'wrongLetters' array
  checkLetters: function(guessedLetters){
    // How can I check against 'model'?
    // I have an array of guessed letters
    // I have my secret word of 'model'
    // this.secretWord; => model
    // guessedLetters; => mq 
    var correct_letters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = [];
    for(var i = 0; i < guessedLetters.length; i++) {
      for(var n = 0; n < this.secretWord.length; n++) {
        if(guessedLetters[i] !== this.secretWord[n]) {
          wrongLetters.push(guessedLetters[i]);
        }
      }
    }
    return ['m____',wrongLetters]; 
  }
=======
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
>>>>>>> ba639a35840831ba314dbffd1f28d75fb4470cac
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

<<<<<<< HEAD
  // Check if the player has lost and end the game if so
  // Assume they've guessed [x,z, k, p, q,s,t,v,7]
  // How can I test this? Where does wrongLetters come from?
  checkLose: function(wrongLetters){
    // if(!checkWin) {
    //   wrongLetters;
    // }
    return wrongLetters.length >= this.MAX_GUESSES;
  }
=======
// Check if the player has lost and end the game if so
checkLose: function(){
  if (this.numGuesses === 0) {
    document.getElementById("wordString").innerHTML = "You lost!";
  }
}
>>>>>>> ba639a35840831ba314dbffd1f28d75fb4470cac
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
<<<<<<< HEAD
  console.log(word.secretWord);
  console.log(word.checkLetters(['m', 'q'])[1]);

  // // Created a losing scenario
  // console.log(player.checkLose(wrongLettersArray));

  // Created a not yet losing scenario
  // console.log(player.checkLose(wrongLettersArray));
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
=======
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
>>>>>>> ba639a35840831ba314dbffd1f28d75fb4470cac
};