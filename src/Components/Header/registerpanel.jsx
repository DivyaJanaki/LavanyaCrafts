import React, { Component } from 'react';
import './header.css'


const Register = (props) =>{

    return(
        <div id="RegisterPanel" class="p-3 dropdownPanel" data-target="t2">
                <div class="PanelHeader clearfix">
                <span class="header">Register</span>
                <a href="#" class="link mylogin" id="loginReg" data-target="t1" onClick={props.Login()}>Or Login</a>
                </div>
                <div class="PanelBody">
                <form>
                    <label><b>Username *</b></label>
                    <input type="text" placeholder="" name="uname" required/>
                    <label><b>Email Address *</b></label>
                    <input type="text" placeholder="" name="email" required/>
                    <label><b>Password *</b></label>
                    <input type="password" placeholder="" name="psw" required/>
                    <button type="submit">Register</button>
                            <div class="Panelfooter">
                            <label>
                                Your personal data will be used to support your experience throughout this website, to manage access to your account<br/>
                                <input type="checkbox" id="agree" name="agree"/> I Agree
                            </label> 
                                <span class="PanelfooterRight"><a href="#">Lost your password?</a></span>
                            </div>
                </form>            
                </div> 
        </div>    
    )
}

export default Register;