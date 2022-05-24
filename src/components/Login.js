import React, { useState } from 'react'
import '../styleSheet/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthImage from '../assets/images/new-beta-lady.jpeg'
import Eye from '../assets/images/eye.svg'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    let nav = useNavigate()
    const login = (e) => {
        e.preventDefault()
        nav('/dashboard')
    }
    return (
        <div className="login_container">
            <div className="login_image_container" style={{ backgroundImage:`url(${AuthImage})` }}>
                    <div className="login_card">
                        <div className="login_logo_div">
                            {/* <img src={Logo} alt="logo" /> */}
                            <p>ARA</p>
                        </div>
                        <div className="text_form">
                            <div className="welcome_text_div">
                                <p className="welcome">Welcome</p>
                                <p className="welcome_text">You are about to login to an awesome react app</p>
                            </div>
                            <form className="login_form" onSubmit={login}>
                                <div className="input_field">
                                    <label htmlFor="email" className="input_label">Email Address</label>
                                    <input type="email" className="input_box" value={email} onChange={handleEmailChange} required />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="password" className="input_label">Password</label>
                                    <input type="password" className="input_box" value={password} onChange={handlePassChange} required />
                                    <img src={Eye} alt="show password" className="toggle_password"/>
                                </div>
                                <p className="forgot_password">Forgot Password?</p>
                                <div className="btn_div">
                                    <button className="btn" type='submit'>
                                        Sign In
                                    </button>
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
