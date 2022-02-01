import React, { Component } from 'react';
import AboutUs from './aboutUs';
import Mission from './mission';
import Trending from './trending';
import Layout from '../../../src/Layout';
import './home.css'

const Home =() => {
    return(
        <>
        <Layout>
        <AboutUs/>
        <Mission/>
        <Trending/>
        </Layout>
        </>
    )
}

export default Home;