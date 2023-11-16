import React, { useState } from 'react';
import DynamicLogin from './DynamicLogin';




function Login() {
    const [username, setUsername ] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState('welcome');


    const handleSubmit =(event) => {
        event.preventDefault();

        if(username == "JamesBond" && password == "007"){
            setUser("home")
            console.log(user)
        
        } else {
            setUser("invalidUser")
            console.log(user)
        }

    }
    
    return (
        <div className='App'>
            <h1>Login</h1>
            <label>Username</label>
            <input type ="text" value ={username} placeholder ="enter username"
            onChange ={(event)=>setUsername(event.target.value)}/>
            <br></br>
            <br></br>
            
            <label>Password</label>
            <input type="text" value={password} placeholder='enter password' onChange={(event) => setPassword(event.target.value)}/>
            <br></br>
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
            <DynamicLogin User = {user} />
        </div>
    );
}

export default Login;