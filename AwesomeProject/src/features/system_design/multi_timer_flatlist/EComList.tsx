import React, { useEffect, useState } from "react";
import { useTimer } from "./effects/useTimer";

function EcomList(){

    const [time,setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setTime((prev)=>prev+1)
        },2000)
    },[])

    const {timerInstance} = useTimer(()=>{})

    return <></>

}

export default React.memo(EcomList)