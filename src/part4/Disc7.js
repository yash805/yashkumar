import React from 'react';

function Disc7(){
 
    

    return(
        <>
        <h1>comp</h1>
        <Other><h1>hi i am here</h1></Other>
       
        </>
    )
    function Other(props){
        return(
            <>
            <h1>{props.children}</h1>
            </>
            
        )
    }
}
export default Disc7;



// const[data,setData] = useState();
// <h1>c.c</h1>
// <input type="text" onChange={(e)=> setData(e.target.value)}></input>
// <h1>{data}</h1>