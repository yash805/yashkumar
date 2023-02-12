import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";
import { useState } from "react";

function Runs2(){

    const initial = ["india", "u.s"];
    const[countries, setCountries] = useState(initial);
    const [state,setState] = useState([]);

    const handlechange = (countrys)=>{
    console.log(countrys);

    let state =[];
    if(countrys === "india"){
        state = ["haryana","punjab","j.k"];
    }else if(countrys === "u.s"){
        state = ["texas","nyk"]
    }else{
        state = [];
    }
    setState(state);

    }
    return(
        <>
        <select onChange={(e)=> handlechange(e.target.value)}>
            {
                countries.map((country,index)=> {
                    return(
                        <>
                        <option key={index} value={country}>{country}</option>
                        </>
                    )
                })

            }
      
        </select>
        <select>
                {
                    state.map((state,index)=> {
                        return(
                            <>
                            <option key={index} value={state}>
                                {state}

                            </option>
                            </>
                        )
                    })
                }
            </select>

        </>
    )
}
export default Runs2;