class TimerUtil {
    constructor(handler:()=>{}){
      this.startTimer(handler)
    }
    
    startTimer(handler:()=>{}) {
      setInterval(()=>{
        handler()
      },1000)
    }
}

export default TimerUtil