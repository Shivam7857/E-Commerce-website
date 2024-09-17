import React from 'react';
import {FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

const Services = () =>{
     return (<>
<div className="container">
    <div className="row">
        <div className="col-md-3">
        <img src={require('./Images/return (3).png')} />
  <div class="card-body">
  <h3 class="card-title">EASY RETURNS</h3>
  </div>
        </div>
        <div className="col-md-3">
        <img src={require('./Images/customer-service (1).png')} />
  <div class="card-body">
    <h3 class="card-title">CUSTOMER CARE</h3>
  </div>
        </div>
        <div className="col-md-3">
        <img src={require('./Images/online-shopping.png')} />
  <div class="card-body">
    <h3 class="card-title">EASY SHOPPING</h3>
</div>
        </div>
        <div className="col-md-3">
        <img src={require('./Images/cash-on-delivery (2).png')} />
  <div class="card-body">
    <h3 class="card-title">CASH ON DELIVERY</h3>
</div>
        </div>
    </div>
</div>
<br></br>
<br></br>
<div className="container">
    <div className="row">
        <div className="col-md-3">
        <img src={require('./Images/inspection.png')} />
  <div class="card-body">
  <h3 class="card-title">TESTED PRODUCTS</h3>
  </div>
        </div>
        <div className="col-md-3">
        <img src={require('./Images/replacement.png')} />
  <div class="card-body">
    <h3 class="card-title">PRODUCT REPLACEMENT</h3>
  </div>
        </div>
        <div className="col-md-3">
        <img src={require('./Images/supplier.png')} />
  <div class="card-body">
    <h3 class="card-title">BECOME A SUPPLIER</h3>
</div>
        </div>
        <div className="col-md-3">
        <img src={require('./Images/tax.png')} />
  <div class="card-body">
    <h3 class="card-title">LEGAL PAYMENTS</h3>
</div>
        </div>
    </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
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

export default Services;