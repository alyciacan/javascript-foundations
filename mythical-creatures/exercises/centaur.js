class Centaur {
  constructor(name) {
    this.name = name;
    this.breed = name.type;
    this.cranky = false;
    this.standing = true;
    this.actions = 0;
    this.layingDown = false
  }
  getCranky() {
    if (this.actions >= 3) {
      this.cranky = true;
      this.actions = 0
    }
  }
  shootBow() {
    if (this.cranky || this.layingDown) {
      return "NO!"
    } else {
    this.actions++
    this.getCranky()
    return "Twang!!!"
  }
}
  run() {
    if (this.cranky || this.layingDown) {
      return "NO!"
    } else {
    this.actions++
    this.getCranky()
    return 'Clop clop clop clop!!!'
  }
  }
  sleep() {
    if (this.layingDown) {
      this.cranky = false
      return "ZZZZ"
    } else {
      return "NO!"
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true
  }
  standUp() {
    this.layingDown = false;
    this.standing = true
  }
  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    } else {
      this.cranky = false
    }
  }
}





module.exports = Centaur
