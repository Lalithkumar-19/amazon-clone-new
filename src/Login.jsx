import React, { useState } from 'react'
import "./login.css";
import { Link } from 'react-router-dom';
import {auth} from "./firebase";
import { useNavigate } from 'react-router-dom';
import  {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
function Login(props) {
  const navigate=useNavigate();

 const register=(e)=>{
    e.preventDefault()
     createUserWithEmailAndPassword(auth,email,password).then(auth=>{
         if(auth){
             
          navigate("/");
      
             
         }
     }).catch(err=> alert(err.message));
 }

 const login=(e)=>{
  e.preventDefault()
   signInWithEmailAndPassword(auth,email,password).then(auth=>{
       if(auth){
           
        navigate("/");
    
           
       }
   }).catch(err=> alert(err.message));
}











const[email,setEmail]=useState('');
const[password,setPassword]=useState('');



  return (
    <div className='login'>
    <Link to="/">
    <img  className='login_img' alt='lalith amazon'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
        </Link>  
       <div className='login_container'>
           <h1> sighn-in</h1>
           <form >
               <h5>E-mail:</h5>
               <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
               <h5>Password</h5>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
               <button  className='login_sighnin_button' type="submit"  onClick={login} > sigh in</button>
               
           </form>
           <p>
               It is not official amazon application .Ita just a clone made by MR.M.LALITH KUMAR,RGUTIAN ongole campus
               please don't provide your other apps or websites passwords.

           </p>
           <button className='login_sighnup_button' onClick={register}  > create a new account</button>
       </div>
        

        
        </div>
  )
}
export default Login;



