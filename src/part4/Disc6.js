// counter making by reducer

import { useReducer } from "react";

const reducer=(state, action)=> {
    switch (action){
        case "inc":
            return state + 1;
        case "dec":
            return state-1;
        default:
                return 0;    
    }

};

function Disc6(){
    const initial = 0;
    const [state, dispatch] = useReducer(reducer, initial);
    return(
        <>
        <button onclick={()=> dispatch("dec")}>--</button>
        {state}

         <button onclick={()=> dispatch("inc")}>++</button>
        </>
    )
}
export default Disc6;