import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import "./App.css";

const Home = () =>{
     return(<>
     <br>
     </br>
     <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='container'>
      <img src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg" class="d-block w-100" alt="..."/>
    </div>
    </div>
    <div class="carousel-item">
    <div className='container'>
      <img src="https://sslimages.shoppersstop.com/sys-master/root/h5c/he9/32908772900894/menswear_top-banner-web_540-h9.jpg" class="d-block w-100" alt="..."/>
    </div>
    </div>
    <div class="carousel-item">
    <div className='container'>
      <img src="https://sslimages.shoppersstop.com/sys-master/root/h63/hc7/32821351153694/Static-Web-Kids_198i28.jpg" class="d-block w-100" alt="..."/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br>
     </br>
<div className='container'>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://img1.junaroad.com/stories/story_p_6645b2e7f38057082c03ab51-1719815162.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MEN'S COLLECTION</h5>
        <p class="card-text">Explore our vast collection of clothing for men, where you will find Plain, Printed, & Oversized T-shirts, along with trendy Cargo Pants, Joggers, and more. No matter what your style is, you will find something on our online shopping website for men. Enhance your style with us, where quality is best in affordable price for men.</p>
        <NavLink to="/Mens"><button type="button" class="btn-btn-primary">Explore More </button>
</NavLink>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://img1.junaroad.com/stories/story_p_6674ea18f47b7008247b08fd-1719282386.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">WOMEN'S COLLECTION</h5>
        <p class="card-text">Looking for trendy ladies' clothes.Explore our diverse range online, including Kurtis, shirts, tops, t-shirts, pants, boxers, and jeggings, all at affordable prices. Whether it's for formal occasions or weekend outings, find stylish clothes for women of all styles.Enhance your style with us.</p>
        <br></br>
        <NavLink to="/Womens"><button type="button" class="btn-btn-primary">Explore More </button>
</NavLink>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://img1.junaroad.com/stories/story_p_667d35f6fd1d3c78c98f3bae-1719647048.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">KID'S COLLECTION</h5>
        <p class="card-text">Whether you're looking for party outfits, weekend wear or need to update their everyday basics, our kid's clothing edit has them covered from head to toe. From jeans, to kid's sweaters, dresses and t-shirts, our essentials cover a wide range of garments. Complete their new look by checking out our kid's accessories.</p>
        <NavLink to="/Kids"><button type="button" class="btn-btn-primary">Explore More </button>
</NavLink>

      </div>
    </div>
  </div>
</div>
</div>




<br></br>
<div className="container">
    <div className="row">
        <div className="col-md-3">
  <NavLink to="/Kids"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/f44489acb4d5__j_-_6-8yr.jpg" class="card-img-top" alt="..."/></NavLink>
</div>
    
        <div className="col-md-3">
  <NavLink to="/Kids"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/5570313b5d61__k_-_8-10yr.jpg" class="card-img-top" alt="..."/></NavLink>
</div>
        <div className="col-md-3">
  <NavLink to="/Kids"> <img src="https://cdn-eu.dynamicyield.com/api/9879937/images/780c90eb397__l-_10-12yr.jpg" class="card-img-top" alt="..."/></NavLink>
</div>
      
        <div className="col-md-3">
  <NavLink to="/Kids"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/29acbad85a3a5__m-_12-14yr.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
  
    </div>
</div>


<br></br>
<div className="container">
    <div className="row">
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://www.beyoung.in/api/catalog/homepage-06-06/Hot-Selling/big-saving-zone-polo.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://www.beyoung.in/api/catalog/homepage-06-06/Hot-Selling/big-saving-zone-full-sleeve.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://www.beyoung.in/api/catalog/homepage-06-06/Hot-Selling/big-saving-zone-pyjama.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://www.beyoung.in/api/catalog/homepage-06-06/Hot-Selling/jeans-banner11.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
    </div>
</div>
<br>
</br>
<div className="container">
    <div className="row">
        <div className="col-md-3">
  <NavLink to="/Womens"><img src="https://img.faballey.com/images/banner/599917da-919c-4250-8b58-5dd5ffc028b1.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
        <div className="col-md-3">
  <NavLink to="/Womens"><img src="https://img.faballey.com/images/banner/7c1fed5c-f0a2-4b8b-bbbf-c871a94c7605.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
        <div className="col-md-3">
  <NavLink to="/Womens"> <img src="https://img.faballey.com/images/banner/451acc27-318f-4292-ba77-b670b477618a.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
        <div className="col-md-3">
  <NavLink to="/Womens"> <img src="https://img.faballey.com/images/banner/0a0b3dfa-8000-4ed8-ad5e-4419fbdef4d3.jpg" class="card-img-top" alt="..."/></NavLink>
  </div>
    </div>
</div>
<br>
</br>

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://sslimages.shoppersstop.com/sys-master/root/he8/h42/32833680474142/new10-sale-strip-web_he8--e3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://sslimages.shoppersstop.com/sys-master/root/h89/h89/32968385789982/fab-sale-strip-web_2024--06--24--new-.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://sslimages.shoppersstop.com/sys-master/root/hee/h0e/32848935583774/first-citizen-strip-web_-jd039.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br>
</br>


<div className="container">
    <div className="row">
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/1040b256bbbe5__shirts.png" class="card-img-top" alt="..."/></NavLink>
</div>
    
        <div className="col-md-3">
  <NavLink to="/Kids"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/11d361e41b33a__topsandtees_copy.png" class="card-img-top" alt="..."/></NavLink>
</div>
        <div className="col-md-3">
  <NavLink to="/Mens"> <img src="https://cdn-eu.dynamicyield.com/api/9879937/images/2b4b30da0bf37__jeans.png" class="card-img-top" alt="..."/></NavLink>
</div>
      
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/34f463d62a806__pantsandjoggers.png" class="card-img-top" alt="..."/></NavLink>
  </div>
  
    </div>
</div>


<div className="container">
    <div className="row">
        <div className="col-md-3">
  <NavLink to="/Womens"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/8150c31a6089__girls_dresses_frocks.png" class="card-img-top" alt="..."/></NavLink>
</div>
    
        <div className="col-md-3">
  <NavLink to="/Mens"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/2be953ebabcc1__shorts.png" class="card-img-top" alt="..."/></NavLink>
</div>
        <div className="col-md-3">
  <NavLink to="/Kids"> <img src="https://cdn-eu.dynamicyield.com/api/9879937/images/38a48ecdef80b__bodysuits.jpg" class="card-img-top" alt="..."/></NavLink>
</div>
      
        <div className="col-md-3">
  <NavLink to="/Womens"><img src="https://cdn-eu.dynamicyield.com/api/9879937/images/2bcc9b369af1__skirts.png" class="card-img-top" alt="..."/></NavLink>
  </div>
  
    </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<footer>
<div class="p-4 mb-2 bg-secondary text-white">
<div className="container grid grid-five-column"> 
<div class="row">
<div class="col">  
  <br></br>
  <br></br>
            <div className="Footer-About">
                <h3>BUGS</h3>
                <p>Explore our vast collection of clothing for Mens,Womens and Kids.</p>
             </div>
             </div>
             <div class="col"> 
   <br></br>
   <br></br>
             <div className="Footer-suscribe">
              
                <h3>Subscribe to get updates.</h3>
                <form action="#">
                  <input
                  type="email" required
                  autocomplete="off"
                  placeholder="Email"
                  />
                  <input type="Submit" value="Subscribe"/>
                </form>
             </div>
             </div>
             <div class="col"> 
   <br></br>
   <br></br>
             <div className="Footer-Social">
                <h3>FOLLOW US</h3>
                <div className="footer-social--icons">
                  <div>
                  <a href="https://www.instagram.com/_s_i_n_h_a___/" target="_blank">
                  <FaInstagram className="icons" />
                  </a>
                  </div>
                  <div>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin className="icons" />
                    </a>
                  </div>
                    <a href="https://www.youtube.com/channel/UCrqPPElMRKc_J2Cff6vx7Yg" target="_blank">
                    <FaYoutube className="icons" />
                    </a>
                    </div>
                    </div>
             </div>
            </div>
                      </div>
                    </div>
    </footer>



 </>);
     
}

export default Home;