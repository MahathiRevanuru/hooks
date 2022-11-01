import { useState } from "react";
import '../style.css'

// const Statehook =()=>{
//     const[count,setCount]=useState(0)
//     return(
//  <div className="usestate">
// <h1>From useState Counter:{count}</h1>
// <button onClick={()=>setCount(count+1)}>Counter</button> 
 
 
//  </div>
//     )
// }



const Statehook=()=>{
    const[title,setTitle]=useState('')

    const submitHandler=e=>{
        e.preventDefault();
        console.log(title);
    }
    return(
        <>
        <form  onSubmit={submitHandler}>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" value={title}/>
            <input type="submit" value="submit" />
        </form>
        
        
        </>
    )
}

export default Statehook;