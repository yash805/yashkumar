// access dom elements in react
import React,{useRef,} from 'react'

function Part1(){
    const inputref = useRef();
    
     const access =()=>{
         console.log(inputref);
     }
    return(
        <>
        <input type="text" ref={inputref}></input>
        <button onClick={()=> access()}>click</button>
        
        </>
    )
}
export default Part1;