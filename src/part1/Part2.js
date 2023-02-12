// display dropdown value selected by the user in another textbox
//display dropdown value selected by the user in another textbox -- here use onchange for this
import {useState} from 'react';
function Part2(){
    const initial = [{id:1,value:"aysh"},{id:2, value:"rahul"}];
    const [data, setData] = useState(initial);
    const[input,setInput] = useState();
    const Handle =(data)=>{
        setInput(data.target.value);

    }

     return(
          <>
          <select onChange={(e)=>Handle(e)}>
              {
                  data.map((da,index)=>{
                      return(
                      <option key={index}>{da.value}</option>
                      )
                  })
              }
          </select>
          <input type="text" value={input}></input>
          </>
     )
}
export default Part2;