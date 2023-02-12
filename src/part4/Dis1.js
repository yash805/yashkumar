// display radio button data selected by the user in another textbox
import {useState,useEffect} from 'react';

function Dis1(){
    const[data,setData] = useState([{id:1,value:"yash"},{id:2, value:"rahul"}]);

    const[radio,setRadio] = useState();

    const handleradio =(datas)=> {
        setRadio(datas)
    }
    return(
        <>
        <div>
            {
                data.map((da,index)=> {
                    return(<>
            <input type="radio" checked={radio === da.value}  onChange={()=>handleradio(da.value)}></input>
            {da.value}
                  </>  )
                })
            }
        </div>
        <h1>{radio}</h1>

        </>
    )
}
export default Dis1;
