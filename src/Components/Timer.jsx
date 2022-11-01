import { useState,useEffect } from "react";


const Timer=()=>{
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
       const interval= setInterval(() => {
            setTime(new Date())
            console.log("timer is updated")
        }, 1000);
        return()=>{
clearInterval(interval)
console.log('component is unmounted');
        }

    }
   ,[] )
    return(
        <>
        <h1>{time.toLocaleTimeString()}</h1>
        </>
    )
}
export default Timer;