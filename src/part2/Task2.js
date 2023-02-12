// how to loop an array or array of objects
import { useState } from "react";
function Task2(){
    const initial = [{id:1, value:"yash"},{id:2, value:"rahul"}];
    const[array, setArray] = useState(initial);
    return(
        <>
          {
              array.map((data, index) => {
                return (
                <h1 key={index}>{data.value}</h1>
                )
              })
          }
        </>
    )
}
export default Task2;