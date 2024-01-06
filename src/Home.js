import React from 'react'
import "./Home.css";
import Carousal from './Carousal';
import Product from './Product.js';
const Home = () => {
 


   
  return (


    
    <div className='home'>
        <div className="home_container">
        <div className='home_img'>
        <Carousal />
          </div>  
          <div className='home_row'>
          < Product  rating={4} id="12345609" title="NiTHO NX120 STEREO GAMING HEADSET with Foldable Microphone, Compatible with PS4/Xbox One/Switch/Phone" price={782} image="https://image.made-in-china.com/202f0j00ypHkngjhbTbR/Original-Smart-Phone-al-por-mayor-Universal-Cell-Phone-para-el-tel-fono-14PRO-14PRO-Max-128GB-256GB-Tel-fono-M-vil.webp"/>
          < Product  rating={3} id="1234560909" title="Maxima Max Pro X5 Smartwatch-Premium Ultra Slim 1.7” HD Display with 15 Days Battery Life,IP68 Resistance" price={2000} image="https://images-eu.ssl-images-amazon.com/images/I/71lqfmYUT7L._AC_UL160_SR160,160_.jpg"/>
          < Product id="1234234" rating={5} title="Apple iPhone 14 Plus 256GB Blue" price={93999} image="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY218_.jpg"/>
          </div>


          
          <div className='home_row'>
              
             < Product  rating={2} id="123456" title="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Advance" price={12989} image="https://image.made-in-china.com/202f0j00ypHkngjhbTbR/Original-Smart-Phone-al-por-mayor-Universal-Cell-Phone-para-el-tel-fono-14PRO-14PRO-Max-128GB-256GB-Tel-fono-M-vil.webp"/>
             <Product id="123457" title="OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers " rating={4} price={16990} image="https://image.made-in-china.com/202f0j00ypHkngjhbTbR/Original-Smart-Phone-al-por-mayor-Universal-Cell-Phone-para-el-tel-fono-14PRO-14PRO-Max-128GB-256GB-Tel-fono-M-vil.webp"/>
             < Product id="123458098"rating={4}  title="Redmi Note 11 Pro + 5G (Stealth Black, 8GB RAM, 256GB Storage) " price={17999} image="https://image.made-in-china.com/202f0j00ypHkngjhbTbR/Original-Smart-Phone-al-por-mayor-Universal-Cell-Phone-para-el-tel-fono-14PRO-14PRO-Max-128GB-256GB-Tel-fono-M-vil.webp"/>
             < Product id="123458356"  rating={4} title="Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 |" price={8999} image="https://image.made-in-china.com/202f0j00ypHkngjhbTbR/Original-Smart-Phone-al-por-mayor-Universal-Cell-Phone-para-el-tel-fono-14PRO-14PRO-Max-128GB-256GB-Tel-fono-M-vil.webp"/>
              </div>  
              <div className='home_row'>
              < Product id="123458" rating={3} title="Sansui 102cm (40 inches) Full HD Certified Android LED TV JSW40ASFHD (Midnight Black) With Voice Search" price={17999} image="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/plp/new-phones/new-imgs/p40-pro-blue.png"/>
             <Product id="123459" title="MI 100 cm (40 inches) 5A Series Full HD Smart Android LED TV with 24W Output " rating={3} price={39000} image="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/plp/new-phones/new-imgs/p40-pro-blue.png"/>
             <Product id="123450" title="Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling) " rating={3} price={20500} image="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/plp/new-phones/new-imgs/p40-pro-blue.png"/>
         
              </div> 

              <div className="home_row">
              <Product 
              title="Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling) " rating={3} price={20500} image="https://www.astore.in/cdn/shop/products/product-image-1350061109.jpg?v=1685531682"/>
              <Product  id="1234561"  title="Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling) " rating={3} price={30500} image="https://www.astore.in/cdn/shop/products/product-image-1350061109.jpg?v=1685531682"/>
              <Product   id="1234562" title="Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling) " rating={3} price={20500} image="https://www.astore.in/cdn/shop/products/product-image-1350061109.jpg?v=1685531682"/>
              <Product   id="1234564" title="Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling) " rating={3} price={20500} image="https://www.astore.in/cdn/shop/products/product-image-1350061109.jpg?v=1685531682"/>

              
              </div>
              <div className='home_row'>
              <Product  id="123423" title="Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling) " rating={3} price={20500} image="https://www.sahivalue.com/product-images/Image_2809_050022.jpg/293890000017191597/400x400"/>

              </div>
        </div>









    </div>
  )
}

export default Home;