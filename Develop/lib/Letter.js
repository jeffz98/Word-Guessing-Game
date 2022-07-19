class Letter {
  
  constructor(letter){
    const lettersAndNums = 'abcdefghijklmnopqrstuvwxyz0123456789';
    this.letter = letter;
    if (lettersAndNums.includes(this.letter)) {
        this.visible = false;
    } else {
        this.visible = true;
    }
    
  }
  toString() {
    if (!this.visible) {
        return '_';
    } else {
        return this.letter;
    }
  }
  guess(guessLetter) {
    if (this.letter === guessLetter) {
        return true;
    } else {
        return false;
    }
  }

  getSolution() {
    return this.letter;
  }
}

module.exports = Letter;
