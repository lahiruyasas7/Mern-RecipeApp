import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import { useCookies} from "react-cookie";
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = ()=>{
    setCookies("access_token", "");
    windows.localStorage.removeItem("userID")
    navigate("/auth")
  }
  return (
    <div className='navbar'>
        <span><Link to='/'>Home</Link></span>
        <span><Link to='/SaveRecipe'>saved recipe</Link></span>
        
        <span><Link to='/CreateRecipe'>create recipe</Link></span>
        {cookies ? (<span><Link to='/Auth'>Login/Register</Link></span>) : (<button onClick={logout}>Log Out</button>)}
    </div>
  )
}

export default Navbar;