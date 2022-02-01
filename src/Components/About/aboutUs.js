import React from 'react';
import './aboutUs.css';
import Layout from '../../../src/Layout'
import craft1 from '../../../src/assets/craft1.png'
import craft2 from '../../../src/assets/craft2.png'

const About = () =>{

    return (
        <Layout>
        <div className="container-fluid">
            <div className="row About-banner">
                <div className="col-md-6">
                    <img className="about-img p-5"src={craft1}></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <p class='banner-title'>A social enterprise. An authentic platform for pure craft. </p>
                    <p>Lavanya Crafts is a digital platform for some of the world’s oldest and most intricate craft forms. We started this social enterprise close to 10 years ago in order to preserve, showcase and share the talent of India’s artisans with the world. We hope to be able to raise the dignity of the Indian artisan in our own way and kindle an interest and support for an unsurpassed legacy of craft that spans millennia and spreads across the length and breadth of the land. It is our effort to curate an undeniably unique selection of traditional art and craft translated into a range of beautiful, contemporary products.</p>
                </div>
            </div>
            <div className="row About-sec-banner">
                <div className="col-md-6 flex-column d-flex p-4 justify-content-center align-items-center">
                <p class='banner-title color-white'>Supporting eco-friendly choices </p>
                <p>Creating awareness for craft is inextricably linked with promoting ecological choices with a few exceptions. The Indian crafts practitioner is perhaps the greatest conservationist who strives to live in harmony with his environment. While, we do our best to promote eco-friendly choices to the best extent possible, there are a few exceptions where helping livelihoods may take precedence, simply due to our commitment to help every craft form and every type of artisan from our hinterlands.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-about-two p-3"src={craft2}></img>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default About;