import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const AboutUs =() => {
    return(
        <section className="container-fluid pb-3" id="AboutUs_MainPage">
        <div className="row">
              <div className="AboutUs-content col-md-7 d-flex flex-column justify-content-center align-items-center p-4">
                <h1 className="text-center"><u>Embrace the spirit <br/>of India</u></h1>
                <div className="separator"></div>
                <p id="AboutPara" className="p-2 p-md-5">
                  An unparalleled legacy that spans millennia. Pure, authentic craft sourced from artisans across the Indian sub-continent. Our vast collection of over 80 different craft forms celebrates a heritage of some of the world’s oldest handicrafts.
                </p>
                <Link to="/About"><p className="mainReadMore p-2"><small>READ MORE ABOUT US</small></p></Link>
            </div>
            
            <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
              <div id="carouselExampleIndicators" className="carousel slide p-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="Images/jutes bag.png" className="d-block" alt="theobroma"/>
                  </div>
                  <div className="carousel-item">
                    <img src="Images/cushion.png" className="d-block" alt="starbucks"/>
                  </div>
                  <div className="carousel-item">
                    <img src="Images/banner2.jpg" className="d-block" alt="subway"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
      </section>
    )
}
export default AboutUs;