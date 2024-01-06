import React from 'react';
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
function Carousal() {
  return (
    <div className='carousel'>



      <div id="demo" className="carousel slide" data-bs-ride="carousel">




        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className='image' src="https://connect-assets.prosple.com/cdn/ff/zNryDlf-uf0qIh0kt7iOyMHP2B0NW30YDNDCOXMU-NM/1578558097/public/2020-01/Banner-Amazon-893x321-2020.jpg" alt="Los Angeles" class="d-block" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img  className='image' src="https://www.shopickr.com/wp-content/uploads/2018/10/amazon-great-indian-sale-2018-diwali-banner.jpg" alt="Chicago" class="d-block" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img className='image' src="https://images.fonearena.com/blog/wp-content/uploads/2023/05/Amazon-Great-Summer-Sale-Storage-sale.jpg" alt="New York" class="d-block" style={{ width: "100%", height: "100%" }} />
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