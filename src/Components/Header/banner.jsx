import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../src/assets/logo2.png'


const Banner =() => {
    return(
        <div className="logoContainer container-fluid d-flex justify-content-center align-items-center pt-2 pb-2">
        {/* <div className="cartDetails">
            <a href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
              <i className="fas fa-bars"></i>
            </a>
            <a href=""><i className="fa fa-heart icon"></i></a>
            <div className="shoppingBag">
              <a href="">
                <span className="fa fa-shopping-bag icon"></span>
                <span className="count">0<span>ITEM(S)-₹</span></span>
                <span className="total">0.00</span>
              </a>
            </div>
        </div> */}
        <div className="logo">
          <Link to="/"><img src={logo2}/></Link>
        </div> 
    </div>
    );
}

export default Banner;