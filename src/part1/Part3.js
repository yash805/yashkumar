// useref example

import React, {useRef} from 'react';

function Part3(){
    let inputref = useRef();
    const access = () => {
        inputref.current.value = "11111";
        inputref.current.focus();
    }
    return(
        <>
        <div>
         <h1>useref</h1>
         <input type="text" ref={inputref} value={"ten"}></input>
         <button onClick={()=> access()}>click</button>
         </div>
        </>
    )
}
export default Part3;