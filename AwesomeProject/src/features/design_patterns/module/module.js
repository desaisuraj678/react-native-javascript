/**
 * https://www.patterns.dev/posts/module-pattern
 
Declarations within a module are scoped (encapsulated) 
to that module , by default. If we don't explicitly export
a certain value, that value is not available outside that module
 */

// default export 
// u can have only one default export in a module
const x = 2
export default x 

// while importing default value , we can use diffeent varible name since there is only one default export
// eg. instead of "import x from module" , we can do "import y from module"

// named exports
// export and declaration are on the same line
// if we do export a on next line it throws error
// A. 
export function a(){

}

export function b(){

}

// or
// B. 
export {a , b} // this is fine
// A and B are same

// export a   // throws error

// We can also import all exports from a module,
// meaning all named exports and the default export,
// by using an asterisk * and giving the name we want to import the module "as"

// import * as math from "./math.js";
// math.default(7, 8);
// math.multiply(8, 9);
// math.subtract(10, 3);
// math.square(3);


/**

Dynamic import
When importing all modules on the top of a file, all modules get loaded before the rest of the file.
In some cases, we only need to import a module based on a certain condition. With a dynamic import, we can import modules on demand.

button.addEventListener("click", () => {
  import("./math.js").then((module) => {
    console.log("Add: ", module.add(1, 2));
    console.log("Multiply: ", module.multiply(3, 2));

    const button = document.getElementById("btn");
    button.innerHTML = "Check the console";
  });
});

 */