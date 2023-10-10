// called last
function debounce(duration = 3000,callback){
    let timer;
    return (...args)=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
            callback.apply(this,args)
        },duration)
    }
}

let debounced = debounce(400,()=>{})



// called first
function debounce_leading(func, timeout = 300){
    let timer;
    return (...args) => {
      if (!timer) {
        func.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    };
}