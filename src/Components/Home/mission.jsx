import React, { Component } from 'react';

const Mission =() => {
    return(
        <section className="container-fluid pt-5 pb-5" id="banner-two">
        <div className="container row">
            <div className="col-md-6">
              <p>Our Mission</p>
              <p className="banner-title">Every purchase has a purpose</p>
              <p className="banner-text">We have direct partnerships with over 320 Indian artisans and over 2000 indirectly. As a social enterprise that seeks to offer a fair-trade platform, our primary purpose is to support handicraft workers. With each purchase you make, you can help make a difference.</p>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
              <p className="banner-title">21+ </p><span className="mb-3">STATES</span>
              <p className="banner-title">2000 </p><span>INDIAN ARTISANS</span>
            </div>
            <div className="col-md-3">
              <img src="./Images/banner2-1.jpg" alt="banner2" id="banner-img"/>
            </div>
        </div>
      </section>
    )
}

export default Mission;