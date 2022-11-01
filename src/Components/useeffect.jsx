import '../style.css';
import {useState ,useEffect} from "react";
const Effecthook=()=>{
const [counter,setCounter]=useState(0)
useEffect(()=>console.log(counter),[counter])

    return(
        <div className='useeffect'>
 <h1>from useeffect Counter:{counter}</h1>
 <button onClick={()=>setCounter(counter+1)}>effectcounter</button>
    </div>
    )
}

export default Effecthook;