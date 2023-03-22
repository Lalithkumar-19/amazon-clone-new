import React from 'react';
import "./carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Carousal() {
  return (
    <div className='carousel'>


    
<div id="demo" className="carousel slide"  data-bs-ride="carousel">


  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/613-gA49v1L._SX3000_.jpg" alt="Los Angeles" class="d-block" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/517z0EragDL._SX1500_.jpg" alt="Chicago" class="d-block" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71FdkjqVLyL._SX3000_.jpg" alt="New York" class="d-block" style={{width:"100%"}}/>
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>


    </div>
  )
}

export default Carousal