// var Person = require('./person');
// var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person){
    var newStatue = new Statue(person.name)
    if (this.statues.length >= 3) {
      var freedPerson = new Person(this.statues[0].name);
      this.statues.shift()
      this.statues.push(newStatue)
      freedPerson.mood = "relieved"
      return freedPerson
    } else {
      this.statues.push(newStatue)
    }
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.mood = "frightened"
  }
}

class Statue {
  constructor(name){
    this.name = name
  }
}

module.exports = {Medusa, Person, Statue};
