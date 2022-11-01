import { useState } from "react";
import Timer from "./Timer";


const Clock=()=>{
    const [displayTimer,setDisplayTimer]=useState(true)
    return(
        <div>{displayTimer?<Timer/>:null}

        
        <button onClick={()=>setDisplayTimer(!displayTimer)}> {displayTimer?"Hide":"Show"}</button>
        </div>
    )
}

export default Clock;