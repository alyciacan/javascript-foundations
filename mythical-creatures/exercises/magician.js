class Magician {
  constructor(object) {
    this.name = `The Great ${object.name}`;
    this.assistant = object.assistant;
    this.favoriteAccessory = object.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  performIncantation(magicWords) {
    return `${magicWords.toUpperCase()}!`
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory != 'top hat') {
      return 'PULL DOVE FROM SLEEVE';
    } else {
      return 'PULL RABBIT FROM TOP HAT';
    }
  }
  performShowStopper() {
    if (this.confidencePercentage >99 && this.assistant === true) {
    return 'WOW! The magician totally just sawed that person in half!'
  } else {
    return 'Oh no, this trick is not ready!'
  }
}
}







module.exports = Magician;
