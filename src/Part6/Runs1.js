// how to display textarea with number of characters left using recat hooks

import { useState } from "react";

function Runs1(){
    const[data,setData] = useState('');
    const[count,setCount] =useState(2000);

    const hands =(data)=>{
        setCount(2000 - data.length);

    }

    return(
        <>
        <textarea onChange={(e)=> hands(e.target.value)}></textarea>
        <p>{count}left</p>
        </>
    )
}
export default Runs1;