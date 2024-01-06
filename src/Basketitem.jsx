import React from 'react';
import { connect, useDispatch } from 'react-redux';
import "./basket.css";
function Basketitem({ id, title, image, price, rating }) {
  const dispatch = useDispatch();


  var count = [];
  console.log("count is ", count)
  for (var i = 1; i <= rating; i++) {
    count.push(i);
  };
  const removeItem = () => {
    console.log("remove function dipatched");
    dispatch(
      {
        type: "remove",
        payload: id
      }
    )


  }



  return (

    <div className='basket' key={id}>
      <div className='basket_info' key={id}>
        <p key={id}>{title}</p>
      </div>
      <div className='second_div'>
        <div className='price_box'>
          <p className='basket_Price'> <small>$</small><strong>{price}</strong></p>

        </div>
        <div className="basket_rating">
          {count.map(
            () => {
              return (
                <p> ⭐</p>
              )
            }
          )}
        </div>




      </div>



      <img className='image' src={image } alt='lalith_amazon' />

      <button type='button' className="button-basket" onClick={() => removeItem()} >Remove </button>








    </div>
  )







}

function mapStateToProps(state) {
  return {
    total: state.basket
  }
}

export default connect(mapStateToProps)(Basketitem);