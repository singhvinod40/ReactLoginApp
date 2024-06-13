import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if ( username != "knight" || password !="hacker") {
        alert('UserName or password is incorrect');
        return;
    }

    console.log(username,password)

};
    
    return(
        <div className= 'wrapper'>
            <form onSubmit={handleFormSubmit} >
                <h1>Login</h1>
                <div className= "input-box">
                    <input type="text" placeholder="Username" required id="username"
                            value={username} onChange={(e) => setUsername(e.target.value)}  />

                    <FaUser  className="icon"/>
                </div>
                <div className= "input-box">
                    <input type="password" placeholder="Password" required  id="password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account?  <a href="#">Register</a></p>
                </div>

            </form>
            
            </div>
    );
};

export default LoginForm;