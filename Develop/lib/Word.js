const Letter = require("./Letter");

class Word {
  constructor(newWord) {
    this.newWord = newWord
    var letters = []
    for (let i = 0; i < newWord.length; i++) {
        letters.push(new Letter ( newWord[i] ))
    }
    this.letters = letters
  }

  guessLetter(guess) {
    for (let i = 0; i < this.letters.length; i++) {
        if (this.letters[i].guess(guess)) {
            return true
        } 
    }
    return false
  }

  guessedCorrectly() {
    for (let i = 0; i < this.letters.length; i++) {
        if (this.letters[i].visible = false) {
            return false
        }
    }
    return true
  }
}



module.exports = Word;
