import React, { useState } from 'react';
import axios from 'axios';
import '../style/home.css';
import Headers from "./Headers";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(event) {
   event.preventDefault();
    try {
     const res = await axios.get("http://localhost:3001/login", {
     email: email,
     password: password,
     });
     const data = res.data;
   
     if (data.status === true) {
     alert("Login Successfully"); 
     } else {
     alert("Login failed")
     }
   
    } catch (err) {
     alert("Error, please try again");
    }
   }

  return (
    <div className='wrapper'>
         <Headers></Headers>
         
         <div class="title"> Login Form </div>
         <form onSubmit={login}>

         <div class="field">
          
          <input type="text" onChange={(event) => {
            setEmail(event.target.value);
          }} required/>
          
          <label>Email Address</label>
       
         </div>
       
         <div class="field">

          <input type="password" onChange={(event) => {
            setPassword(event.target.value);
          }} required/>

          <label>Password</label>
       
         </div>
       
         <div class="content">
       
          <div class="checkbox">
       
             <input type="checkbox" id="remember-me"/>
             <label for="remember-me">Remember me</label>
       
          </div>
          <div class="pass-link">
             <a href="#">Forgot password?</a>
          </div>
       
       </div>
       
       <div class="field">
       
          <input type="submit" value="Login"/>
       
       </div>
       
       <div class="signup-link">
       
          Not a member? <a href="/register">Signup now</a>
       
       </div>
    </form>
 </div>
  );
};

export default Login;