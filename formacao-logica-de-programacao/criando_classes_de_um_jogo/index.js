// Generic class that represents a hero
class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type.toLowerCase(); // standardize
  }

  attack() {
    let action;

    // Decision structure to define the attack
    if (this.type === "mage") {
      action = "used magic";
    } else if (this.type === "warrior") {
      action = "used a sword";
    } else if (this.type === "monk") {
      action = "used martial arts";
    } else if (this.type === "ninja") {
      action = "used a shuriken";
    } else {
      action = "has no defined attack";
    }

    console.log(`The ${this.type} attacked and ${action}`);
  }
}

// Examples of creating heroes
let hero1 = new Hero("Arthas", 30, "warrior");
let hero2 = new Hero("Merlin", 150, "mage");
let hero3 = new Hero("Shaolin", 40, "monk");
let hero4 = new Hero("Hanzo", 25, "ninja");

// Calling the attack method
hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();