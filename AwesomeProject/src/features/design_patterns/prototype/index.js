class Animal {

    constructor(name){
        this.name = name
    }

    static planet = "earth"

    getName(){
        return this.name
    }

    static compare(animalA,animalB){
        return animalA.name == animalB.name
    }
}

class Horse extends Animal {
    constructor(name,age){
        super(name)
        this.age = age
    }
    getAge(){
        return this.age
    }
}

let animal1 = new Animal("tom")
let horse1 = new Horse("bob")

// ----**
console.log(Horse.__proto__ == Animal) // since this is true we can access Horse.compare()


// **-----
console.log(horse1.__proto__ == Horse.prototype)
console.log(Horse.prototype.__proto__ == Animal.prototype)

//prototypes themselves also have a __proto__ object

// *** The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype.

const dog = {
    bark() {
        return `Woof!`;
    },
};
   
const pet1 = Object.create(dog);

// pet1.__proto__ = dog

/*
---- Whenever we try to access a property on an object that doesn't
exist on the object directly, JavaScript will go down the prototype chain
to see if the property is available within the prototype chain.
---- 
 */