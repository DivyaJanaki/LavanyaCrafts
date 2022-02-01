import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from './banner';
import Navbar from './navbar';
import TopHeader from './topHeader';
import './header.css';

const Header =() => {
return(  
<>
    <TopHeader/>
    <Banner/>
    <Navbar/>
</>
);
}

export default Header;