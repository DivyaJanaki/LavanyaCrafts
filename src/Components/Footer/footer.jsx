import React, { Component } from 'react';
import './footer.css';
import footerlogo from '../../assets/footerLogo3.png'

const Footer =() =>{
return(
    <footer id="footerData" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="footerLogo">
              <img className="img-fluid" src={footerlogo}/>
            </div>
          </div>
          <div className="col-md-4">
            <div id="footerCategory" className="pt-md-4">
              <ul type="none">
                <li><a href="">Gifts</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Home & Living</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div id="footerDesign" className="text-center">
            </div>
          </div>
        </div>  
        <hr/>
        <div className="row">
          <div className="col-md-4">
              <h3 className="footerTitle">The company</h3>
              <p className="footercontent"><a href="">About Us</a></p>
              <p className="footercontent"><a href="">Website Policies</a></p>
              <p className="footercontent"><a href="">Privacy Policy</a></p>
              <p className="footercontent"><a href="">Terms & Conditions</a></p>
          </div>
   
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <h3 className="footerTitle">Social Media</h3>
            <p className="footercontent"><a href="">Blogs</a></p>
            <p className="footer-socials">
              <a href="#" target="_blank">
                  <i className="fab fa-instagram fa-2x"></i>
              </a>
              &nbsp;
              <a target="_blank" href="#">
                  <i className="fab fa-twitter fa-2x"></i>
              </a>&nbsp;
              <a target="_blank" href="#">
                  <i className="fab fa-facebook fa-2x"></i>
              </a>
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <h3 className="footerTitle">Orders & Support</h3>
            <p className="footercontent"><i className="fas fa-headset fa-2x"></i> 022 25258301</p>
            <p className="footercontent"><i className="far fa-envelope"></i> Support Mail:<br/>response@lavanyacrafts.com</p>
            <p className="footercontent"><i className="far fa-envelope"></i> lavanyacrafts@hotmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 footercontent text-center" style={{backgroundColor:'black'}}>
              <span>Copyright © Lavanya Crafts. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
)
}
export default Footer;