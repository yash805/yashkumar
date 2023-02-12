// how to display keys and valus of object in loop in react
// how to call a method when component is rendered for the first timein react?  for that we use useeffect

import {useState,useEffect} from 'react';

function Dis2(){
    const[data,setData] = useState([{id:1,value:"yash"},{id:2, value:"rahul"}]);

    useEffect(() =>{
        gethan();
    },[]);
     const  gethan = ()=> {
        console.log("rendered");
    }
    return(
        <>
        <div>{
            data.map((da,index) => {
                return(
                    <>
                    <h1>{da.value}</h1>
                    </>
                )
            })
        } 
        </div>

        </>
    )
}
export default Dis2;