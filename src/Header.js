import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";


function Header() {
  const basket=useSelector(state=>state.basket);
  const dispatch=useDispatch();
  const [user,setUser]=useState("");
useEffect(() => {
  auth.onAuthStateChanged(
    user=>{
    setUser(user.email);
      dispatch({type:"userfound",payload:user.email})
    }
  )

  
}, [])


 

  return (
    <div className='header'>

<img className='header_logo' alt='LOGO' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>



<div className="header_search">
    <input className='header_searchinput'type="text"/>
  <Search className='header_searchicon'/> 
</div>
<div className='header_nav'>
    <div className='header_option'>
    <span className='header_optionline_one'>{user?user:"Hello"}</span>
      <span  style={{textDecoration:"none"}} className='header_optionline_two' > 
      
      {
        user?(<span style={{cursor:"pointer"}} onClick={auth.signOut()}> Sign-out</span>):(
        <Link to="/login" style={{textDecoration:"none"}}>
  <span style={{cursor:"pointer"}} > Sign-In</span>
        </Link>  
          
        )
      }
      </span>
    
  
    </div>



    <div className='header_option'>
    <span className='header_optionline_one'>Returns</span>
        <span className='header_optionline_two'>orders</span>
        </div>


        <div className='header_option'>
        <span className='header_optionline_one'>your</span>
        <span className='header_optionline_two'>Prime</span>

        </div>
 
<div className="header_basket "  >

  <Link to="/checkout" style={{color:"white", textDecoration:"none"}}>
  <ShoppingCart/>
  </Link>

    

    
  

<span className='header_optionline_two header_basketcount'>
   {basket.length} 
   </span> 
   

  </div>
  
  
</div>











    </div>
  )
}
 export default  Header;