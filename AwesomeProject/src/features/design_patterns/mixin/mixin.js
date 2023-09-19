class Dog {
    constructor(name) {
      this.name = name;
    }
}
   
const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
};

Object.assign(Dog.prototype, dogFunctionality);
const newDog = new Dog("Raju")

console.log(newDog.__proto__ == Dog.prototype) // true
// The Object.assign() static method copies all enumerable own properties
//  from one or more source objects to a target object. It returns the modified target object.
// i.e. Dog.prototype will have added properties from dogFunctionality
// while doing assign , it doesn't change reference for eg.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);  // here target and source are important

console.log(returnedTarget === target); // true  .i.e returnedTarget reference is same as target reference

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }


