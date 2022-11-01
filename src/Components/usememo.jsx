import { useState,useMemo } from "react";
import '../style.css'

const Memohook=()=>{
const[count,setCount]=useState(0);
const[number ,setNumber]=useState(5);
// const Factorial=fact(number)
const Factorial=useMemo(()=>(fact(number)),[number])
    return(
        
        <div className="usememo">
            <h2>Factorial:{Factorial}</h2>
            <h1>from useMemo counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>memo counter</button>
        </div>
    )
}
const fact=(n)=>{
    let answer=1
    for(var i=n;i>=n;i--){
        answer=answer*i;
    }
    console.log("factotial function");
    return answer;
}


export default Memohook;