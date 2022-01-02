import React from 'react'
import '../styleSheet/Login.css';
import { Link } from 'react-router-dom';
import AuthImage from '../assets/images/betalady.jpg'
import Logo from '../assets/images/logo.png'
import Eye from '../assets/images/eye.svg'


function Login() {
    return (
        <div className="login_container">
            <div className="login_image_container" style={{ backgroundImage:`url(${AuthImage})` }}>
                    <div className="login_card">
                        <div className="login_logo_div">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="text_form">
                            <div className="welcome_text_div">
                                <p className="welcome">Welcome</p>
                                <p className="welcome_text">Automate notifications and provide support through our omni-channel SMS API</p>
                            </div>
                            <form className="login_form">
                                <div className="input_field">
                                    <label htmlFor="email" className="input_label">Email Address</label>
                                    <input type="email" className="input_box" />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="password" className="input_label">Password</label>
                                    <input type="password" className="input_box" />
                                    <img src={Eye} alt="show password" className="toggle_password"/>
                                </div>
                                <p className="forgot_password">Forgot Password?</p>
                                <div className="btn_div">
                                    <button className="btn">Sign In</button>
                                </div>
                                <p className="question_text">Don't have an account <Link to="/register" className="forgot_password">Create New Account</Link></p>
                            </form>
                        </div>
                    </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}

export default Login
