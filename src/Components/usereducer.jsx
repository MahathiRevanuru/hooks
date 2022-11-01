import React,{useReducer} from "react";
import '../style.css'
const initialState=0

const reducer=(state,action)=>{
    switch (action) {
        case 'inc':
            return state+1;
            
     case 'dec':
        return state-1;
       
        case'reset':
         return initialState;
       
        default:
           return state;
    }
}
const Reducerhook=()=>{
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
      <div className="usereducer">
        <h1>from usereducer counter:{count}</h1>
          <button onClick={()=>dispatch('inc')}>increment</button> <br />
        <button onClick={()=>dispatch('dec')}>decrement</button> <br />
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>

    )
}



export default Reducerhook;