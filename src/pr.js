class Animal {
  constructor(legs = 0) {
    this.legs = legs || 0;
  }

  move() {
    if (this.legs > 0) {
      console.log("Walk");
    } else {
      console.log("Slither");
    }
  }
}

class Dog extends Animal {
  constructor(legs = 4, sound = "ruff") {
    super(legs);
    this.sound = sound;
  }
  bark() {
    console.log(this.sound);
  }
}

const dog = new Dog(4);
dog.move();
dog.bark();
