// how to add data into usestate arrayin f.c in react
import { useState } from "react";

function Disc4(){

    const [data, setData] = useState(["1","2"]);

    const channel=()=> {
        setData([...data,"1"]);
    }
    return(
        <>
        <div>
            {
                data.map((da,index)=> {
                    return(
                        <>
                        <h1>{da}</h1>
                        </>
                    )
                })
            }

        </div>
        <button onClick={() => channel()}>add data</button>
        </>
    );
};
export default Disc4; 