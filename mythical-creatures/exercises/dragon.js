class NewDragon {
  constructor(name, rider) {
    this.name = name,
    this.rider = rider,
    this.hungry = true,
    this.timesEaten = 0
  }
  greet(riderName){
    var riderName = this.rider
    return `Hi, ${riderName}!`
  }
  eat(){
    this.timesEaten += 1;
    if (this.timesEaten > 2) {
      this.hungry = false;
    }
  }
}









module.exports = NewDragon;
