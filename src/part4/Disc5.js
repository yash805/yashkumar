import {useState} from 'react';

function Disc5(){
    let grt = ["rahul","mahindra","suzuki","ziyan","rakesh"];
    const[data,setData] = useState();
    const[person,setPerson] = useState(grt);
    const[output,setOutput] = useState(grt);

    const hands=(e)=>{
        setData(e);

        const pet = person.filter(datas => datas.includes(e));
        setOutput(pet);


    }
    return(
        <>
        <input value={data} onChange={(e)=> hands(e.target.value)}></input>
        <div>
            {
                output.map((da,index)=>{
                    return(
                        <>
                        <div>{da}</div>
                        </>
                    )
                })
            }
        </div>
        </>
        
    )
}
export default Disc5;