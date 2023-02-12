import React,{ useState } from "react";

const Login =()=>{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    return(
    <div className="login">
        <form className="loginform">
            <h1>Login here</h1>
            <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="eamil" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="Password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
    </div>
    );
};
 export default Login;