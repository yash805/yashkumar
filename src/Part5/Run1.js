// how to change focus/ enable/disable textbox in child component based on parent component button click
// 2. handle asynchronous code like delays or api request in react
import {useRef} from 'react';
import Run2 from './Run2';
function Run1() {
    const customref = useRef();

    const handlech = () => {
        customref.current.value = "new york";
        customref.current.focus();
        customref.current.diabled = true;

    }
    const asyn= async()=>{
        let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        mode: "cors",
    });
    console.log(data);

    };

    return(
    
        <>
        <Run2 data={"yash kumar"} inputref={customref} />

        <button onClick={()=>handlech()}>click</button>
        <button onClick={()=> asyn()}>click me</button>



        </>
        
    )
}
export default Run1;