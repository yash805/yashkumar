// how to rerender a component on value change in react

// 2. how to call a method on every rerender of a component in react

import { useState, useEffect } from "react";

function Disc3(){
    const[data, setData] = useState(true);
    useEffect(() => {
        alert('render');
        change()                    //2

    },[data])

     const change = () => {                  //2
        console.log("hello i am here");      //2
    }
    const channel = () => {
        setData(!data)
    }
    return(
        <>
        <button onClick={()=> channel()} >click</button>
        </>
    )
}
export default Disc3;