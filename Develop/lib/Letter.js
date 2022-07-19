class Letter {
  
  constructor(letter){
    const lettersAndNums = 'abcdefghijklmnopqrstuvwxyz0123456789';
    this.char = letter;
    if (lettersAndNums.includes(this.char)) {
        this.visible = false;
    } else {
        this.visible = true;
    }
    
  }
  toString() {
    if (!this.visible) {
        return '_';
    } else {
        return this.char;
    }
  }
  guess(guessLetter) {
    if (this.char === guessLetter) {
        return true;
    } else {
        return false;
    }
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
