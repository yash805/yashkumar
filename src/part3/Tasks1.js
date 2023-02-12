// How to change styles based on condition in React?
// how to show and hide data based on condition in react
import {useImperativeHandle, useState} from 'react';
import './Tasks1.css';
function Tasks1 (){
    const[condition, setCondition] = useState(true);
    const handle = ()=> {
        setCondition(!condition);
    }
    return(
        <>
        <h1 className={condition ? "redclass" : "blueclass"}> cmy background color is changed</h1>
        <button onClick={()=> handle()}></button>

        <h1>{condition && "i am here"}</h1>
        </>
    )
}
export default Tasks1;