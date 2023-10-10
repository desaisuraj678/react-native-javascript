
// 1. the order of resolve("22") written in CallBk1 function does not matter , 
/**
 i.e before then enters into microtask queue , it executes everything in primise's callback function

 */

async function async1() {
  console.log("async1 start");
  let res = await async2();
  console.log("res", res);
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
  let res = await new Promise(async function CallBk1(resolve) {
    resolve("22");
    await new Promise(function CallBk44(resolve) {
      resolve();
      console.log("672163612");
    }).then(() => {
      console.log("RESOLVED");
    });
    console.log("ASDSAD");
  }).then((data) => {
    console.log("ASDSADASD123", data);
    return data;
  });
  console.log("ASDSAD 1");
  return res;
}
console.log("script start");
setTimeout(function CallBk3() {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function ABC1(resolve) {
  console.log("promise1");
  resolve();
}).then(function ABC2() {
  console.log("promise2");
});
console.log("script end");

