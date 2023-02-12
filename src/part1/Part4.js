import React, {useState} from 'react';

function Part4(){

    const [data,setData] = useState([{name: "yash", age: 27}]);

    return(
        <>
        <input type="text"  onChange={(e)=> setData({...data,name:e.target.value})}></input>
        <input type="text" onChange={(e)=> setData({...data,age:e.target.value})}></input>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        </>
        
    )

}
export default Part4;