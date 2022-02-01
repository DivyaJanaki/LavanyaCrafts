import React, { Component } from 'react';
import './header.css'

const Login = (props) =>{

    return(
    <div id="loginPanel" class="p-3 dropdownPanel" data-target="t1">
            <div class="PanelHeader clearfix">
                <span class="header">Login</span>
                <a href="#" class="link" data-target="t2" id="AccCreate" onClick={props.Reg()}>Or Create an Account</a>
            </div>
                <div class="PanelBody">
                    <form>
                    <label><b>Username</b></label>
                    <input type="text" placeholder="" name="uname" required/>
                    <label><b>Password</b></label>
                    <input type="password" placeholder="" name="psw" required/>
                    <button type="submit">Login</button>
                    <div class="Panelfooter">
                        <label>
                        <input type="checkbox" id="remember" name="remember"/>
                        Remember Me
                        </label> 
                        <span class="PanelfooterRight"><a href="#">Lost your password?</a></span>
                    </div>
                    </form>
                </div>
    </div> 
    )
}

export default Login;