import React, { useEffect, useState } from "react";
import TimerUtil from "../utils/TimerUtil";


function useTimer(handler:any){

    const [timerInstance,setTimerInstance] = useState<any>()
    
    useEffect(()=>{
         setTimerInstance(new TimerUtil(handler))
    },[])

    return {
        timerInstance
    }
}

export {useTimer}