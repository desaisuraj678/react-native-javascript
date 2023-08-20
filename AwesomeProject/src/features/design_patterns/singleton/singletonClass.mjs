// https://www.patterns.dev/posts/singleton-pattern

let instance;
let counter = 0;
console.log('singleton hi',Date.now())
 
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }
 
  getInstance() {
    return this;
  }
 
  getCount() {
    return counter;
  }
 
  increment() {
    return ++counter;
  }
 
  decrement() {
    return --counter;
  }
}
 
const singletonCounter = Object.freeze(new Counter());
// catch here is : we create instance here only and then export it 

export default singletonCounter
//or
// export {singletonCounter};