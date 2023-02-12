// how to display data entered by the user in another textbox
import {useImperativeHandle, useState} from 'react';

function Task () {
    const [input,setInput] = useState();
    function handle(e){
        setInput(e.target.value);
    }
    return(
        <>
        <input onChange={(e)=>handle(e)}></input>
        <input value={input}></input>

        </>
    )
}
export default Task;