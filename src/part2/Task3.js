// how to conditionally render an element or text in react

import { useImperativeHandle, useState } from "react";

function Task3(){
    const[condition,setCondition] = useState(false);

    function handle(){
        setCondition(!condition);
    }
    return(
        <>
        <h2>{condition ? "true" : "false"}</h2>
        <button onClick={()=>handle()}>click</button>

        </>
    )
}
export default Task3;