// how to bind array or array of objects to radio button in react

import { useImperativeHandle, useState } from "react";

function Tasks2(){

    const[input,setInput]  = useState([{id:1, value: "yashkumar"},{id:2, value:"rohit"}]);
    const [radio, setRadio] = useState();

    const handle= (data)=>{
        setRadio(data);

    }
    return(

        <>
        <div>
        {
            input.map((da,index) =>{
                return(
                    <>
                       <input type="radio" checked={radio === da.value} onChange={()=>handle(da.value)}></input>
                       {da.value}
                    </>
                )
            })
        }
        </div>
        </>
    )
}
export default Tasks2;