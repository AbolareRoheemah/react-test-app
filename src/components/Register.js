import React from 'react'
import '../styleSheet/Login.css';
import { Link } from 'react-router-dom';
import AuthImage from '../assets/images/auth_girl_image.png'
import Logo from '../assets/images/logo.png'
import Eye from '../assets/images/eye.svg'


function Register() {
    return (
        <div className="login_container">
            <div className="image_container">
                <div className="image" style={{ backgroundImage:`url(${AuthImage})` }}>
                    <div className="register_login_card">
                        <div className="logo_div">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="text_form">
                            <div className="welcome_text_div">
                                <p className="welcome">Welcome</p>
                                <p className="welcome_text">Automate notifications and provide support through our omni-channel SMS API</p>
                            </div>
                            <form className="login_form">
                                <div className="input_field">
                                    <label htmlFor="name" className="register_input_label">Full Name</label>
                                    <input type="text" className="register_input_box" />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="phone" className="register_input_label">Phone Number</label>
                                    <input type="text" className="register_input_box" />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="password" className="register_input_label">Password</label>
                                    <input type="password" className="register_input_box" />
                                    <img src={Eye} alt="show password" className="register_toggle_password"/>
                                </div>
                                <div className="input_field">
                                    <label htmlFor="confirmpassword" className="register_input_label">Confirm Password</label>
                                    <input type="confirmpassword" className="register_input_box" />
                                    <img src={Eye} alt="show password" className="register_toggle_password"/>
                                </div>
                                {/* <p className="forgot_password">Forgot Password?</p> */}
                                <div>
                                    <button className="btn_div">Sign In</button>
                                </div>
                                <p className="question_text">Already have an account? <Link to="/register" className="forgot_password">Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}

export default Register
