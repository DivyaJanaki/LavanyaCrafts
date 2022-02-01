import React,{ Component, useState} from 'react';
import {Link ,useHistory} from 'react-router-dom';
import Login from './loginpanel'
import Register from './registerpanel'
import'./header.css'

const TopHeader =() => {
    const history = useHistory();
    const [sname,setName] =useState();
    const[panel,setPanel]=useState(false);
    const[panelReg,setPanelReg]=useState(false);


 const search = () =>{
    window.$(".search-box").toggle();
 }
 const openPanel = () =>{
     if(!panel){
    window.$(".myPanel").slideDown("slow");
    setPanel(true);
     }else{
        window.$(".myPanel").slideUp("slow");
        setPanel(false);
     }
 }

 const openRegister =() =>{
    setPanelReg(true)
 }
 const openLogin =() =>{
   setPanelReg(false)
}

 const searchQuery = () =>{
        history.push(`Shop?search=${sname}`);
      }

    return(
    <div className="container-fluid p-0">
        <div id="headerTop">
            <div id="headerRight">
                <button className="reg mylogin" data-target="t1" onClick={openPanel}>
                    <i className="fas fa-user-circle p-1"></i> Register/Sign In
                </button>
                <div className="myPanel">
                { (!panelReg) ? <Login Reg={()=>openRegister}/> : <Register Login={()=>openLogin}/> }
                </div>
                <span className="p-3 pipe">|</span>
                <button className="mysearch" onClick={search}><i className="fas fa-search pe-3"></i></button>
                 <div className="search-box">
                        <input className="form-control me-2 input-search" value={sname} onChange={event => setName(event.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit" onClick={searchQuery}>Search</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TopHeader;

