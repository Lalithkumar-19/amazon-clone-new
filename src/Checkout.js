
import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { connect } from "react-redux";
import Basketitem from "./Basketitem";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function Checkout(props) {
  console.log("props are",props.basket) 
  return (
    <>
    <div className="checkout">
       
      <div className="checkout__left">
    
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
       <Link to="/" style={{color:"black",borderStyle:"none"}}>  < ArrowBackIcon/></Link>
          <h2 className="checkout__title">Your shopping Basket</h2>
         
 
          
          

        </div>
      </div>
      <Subtotal />
      <div className="checkout__right">
      
      </div>


     
    </div>
    <div className="product_list">
    {
          props.basket&&props.basket.map((itemss,i)=>{
          return <Basketitem  id={itemss.id} title={itemss.title} price={itemss.price} rating={itemss.rating} image={itemss.image} />
            
          })
        } 
    </div>

    </>
  );
}

export default connect((state)=>state) (Checkout);