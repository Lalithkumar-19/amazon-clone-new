import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

function Product({ id,title,image,price,rating}) {
  var count =[];
  for (var i=1;i<=rating;i++){
count.push(i);
  }

  

const dispatch=useDispatch();

const addtobasket=()=>{
 return   {
     type:"ADD_TO_BASKET",
     payload:{
       "id":id,
       "title":title,
       "image":image,
       "price":price,
       "rating":rating,
     }
   }
};





  return (
    <div className='product' key={id}>
 <div className='product_info' key={id}>
     <p key={id}>{title} </p>
     <p  className='product_Price'> <small>$</small><strong>{price}</strong></p>
<div  className="product_rating">
{count.map(
  ( )=>{
    return(
<p> ⭐</p>
     ) }
)}
  



</div>



 </div>
<img src={image}  alt='lalith_amazon'/>




<button  type='button' className="buttonbutton" onClick={()=>dispatch(addtobasket())} >Add to basket</button>








    </div>
  )
};

export default Product;