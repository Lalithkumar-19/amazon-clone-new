import React from 'react'
import "./subtotal.css";
import { connect } from 'react-redux';


function Subtotal(props) {

  var amount = 0;
  props.basket.forEach(
    function (item) {
      if (item.price && item.price) {
        amount = amount + item.price;
      }
      console.log("item is", item.price);
      console.log("prices are", amount);



    }

  )
  console.log("total basket is:", props.basket);
  return (
    <div className="subtotal">

      <p className='sub'>
        Subtotal ({props.basket.length}): <strong> ${amount}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>



      <button>Proceed to Checkout</button>
    </div>
  );
}


export default connect((state) => state)(Subtotal);