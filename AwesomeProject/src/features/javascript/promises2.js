async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  
  async function async2() {
    console.log("async2");
    let res = await new Promise(function CallBk1(resolve) {
      setTimeout(function CallBk2() {
        console.log("async2 promise");
        resolve("22222");
      }, 3000);
      console.log("222222");
    }).then(() => {
      console.log("7237432646");
    });
  
    console.log("async2222");
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