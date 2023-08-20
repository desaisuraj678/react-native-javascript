/*
    ** In js functions are first class objects .i.e
        - it can be stored in variables
        - it can be passsed as arguments
        - it can be returned from another function


    ** A predicate function is a function that takes one value as input and returns
    true/false based on whether the value satisfies the condition
*/

const numbers = [1,2,3,4,5,6];

// eg .1 
// isEven is a predicate function
function isEven(number){
  return number % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);

// filter() loops through each element of an array and invokes predicate on each element.

// eg.2
// isDivisibleby3 is predicate function
const isDivisibleby3 = ((x)=> x%3===0);
const result=numbers.some(x => isDivisibleby3(x));

//some() loops through elements of an array in ascending order,
//  and invokes predicate on each element of an array.
// If predicate returns true, then looping stops and returns true immediately.


// similarly predicates are passed to find and findIndex 
 const firstFoundElement = Array.prototype.find(isDivisibleby3)
 const firstFoundElementIndex = Array.prototype.findIndex(isDivisibleby3)