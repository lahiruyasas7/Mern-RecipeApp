import React from "react";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import './auth.css'

export default function Auth(){
    return(
        <div className="auth">
            <Login/>
            <Register/>
        </div>
    )
}

const Login = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies("access_token")

    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
         const response = await axios.post("http//:localhost/auth/login", {username, password,});
            setCookies("access_token ", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate('/')

        }catch(err){
            console.error(err);
        }

    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="from-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div className="from-group">
                    <label htmlFor="username">Password: </label>
                    <input type="password" id="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}

const Register = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            await axios.post("http//:localhost/auth/register", {username, password,});
            alert("registration completed! now log in");
        }catch(err){
            console.error(err);
        }

    }

    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <h2>register</h2>
                <div className="from-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div className="from-group">
                    <label htmlFor="username">Password: </label>
                    <input type="password" id="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}