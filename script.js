"use strict"

class Animal {
    constructor(name,){
        this.name = name;
    }
    speak(){
        console.log("Animal Makes a Sound")
    }
};

class Dog extends Animal {
    constructor(name){
    super(name)
    }
    speak(){
        console.log("Woof!")
    }
};
const dog = new Dog("Tommy");
const animal = new Animal("Rex");
