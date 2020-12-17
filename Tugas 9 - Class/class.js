// Release 0
// Buatlah class Animal yang menerima satu parameter constructor berupa name. Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.

// Gunakan method getter untuk mengakses property di dalam class

class Animal {
    constructor(name) {
      this.legs          = 4;
      this.cold_blooded  = false
      this.name          = name;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1
// Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal. Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2, hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal. class Ape memiliki function yell() yang menampilkan “Auooo” dan class Frog memiliki function jump() yang akan menampilkan “hop hop”.

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.legs = 2;
  }
  yell() {
    return "Auooo"
  }
} 

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"

console.log(sungokong.name) 
console.log(sungokong.legs) 
console.log(sungokong.cold_blooded) 


class Frog extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  jump() {
    return "hop hop"
  }
} 
 
var kodok = new Frog("buduk")
console.log(kodok.jump());  // "hop hop" 
console.log(kodok.name) 
console.log(kodok.legs) 
console.log(kodok.cold_blooded) 


class Clock {
    // Code di sini
    constructor (template) {

      this.output = template
      
    }

    render() {
      this.date = new Date();

      this.hours = this.date.getHours();
      if (this.hours < 10) this.hours = '0' + this.hours;

      this.mins = this.date.getMinutes();
      if (this.mins < 10) this.mins = '0' + this.mins;

      this.secs = this.date.getSeconds();
      if (this.secs < 10) this.secs = '0' + this.secs;

      this.template = `${this.hours}:${this.mins}:${this.secs}`

      console.log(this.template);

    }

    stop() {
      return clearInterval(this.timer);
    }

    start() {
      this.timer = setInterval(this.render, 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();
