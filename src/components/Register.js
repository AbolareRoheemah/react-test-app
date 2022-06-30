import React, { useState } from 'react'
import '../styleSheet/Auth.css';
import { Link } from 'react-router-dom';
import AuthImage from '../assets/images/new-beta-lady.jpeg'
import Eye from '../assets/images/eye.svg'
import {useDispatch, useSelector} from 'react-redux'
import { setUserDetails } from '../reducers/user/userSlice'
import { useNavigate } from 'react-router-dom'


function Register() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    let nav = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const userInfo = {
            name,
            password,
            number,
            email
        }
        if (password.trim() === confirm_password.trim()) {
            dispatch(setUserDetails(userInfo))
            nav('/login')
        } else {
            setTimeout(() => {
                setError('pls enter the correct password')
            }, 3000)
        }
    }

    return (
        <div className="register_container">
            <div className="register_image_container" style={{ backgroundImage:`url(${AuthImage})` }}>
                    <div className="register_card">
                        <div className="register_logo_div">
                            <p>ARA</p>
                        </div>
                        <div className="text_form">
                            <div className="welcome_text_div">
                                <p className="welcome">{error}</p>
                                <p className="welcome">Welcome</p>
                                <p className="welcome_text">Register to view an awesome app, I'm sure you don't wanna miss out</p>
                            </div>
                            <form className="register_form" onSubmit={handleRegister}>
                                <div className="input_field">
                                    <label htmlFor="name" className="register_input_label">Full Name</label>
                                    <input type="text" className="register_input_box" value={name} onChange={(e) => { setName(e.target.value)}} required />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="email" className="register_input_label">Email</label>
                                    <input type="email" className="register_input_box" value={email} onChange={(e) => { setEmail(e.target.value)}} required />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="phone" className="register_input_label">Phone Number</label>
                                    <input type="text" className="register_input_box" value={number} onChange={(e) => { setNumber(e.target.value)}} required />
                                </div>
                                <div className="input_field">
                                    <label htmlFor="password" className="register_input_label">Password</label>
                                    <input type="password" className="register_input_box" value={password} onChange={(e) => { setPassword(e.target.value)}} required />
                                    <img src={Eye} alt="show password" className="register_toggle_password"/>
                                </div>
                                <div className="input_field">
                                    <label htmlFor="confirmpassword" className="register_input_label">Confirm Password</label>
                                    <input type="confirmpassword" className="register_input_box" value={confirm_password} onChange={(e) => { setConfirmPassword(e.target.value)}} required />
                                    <img src={Eye} alt="show password" className="register_toggle_password"/>
                                </div>
                                <p className="terms">By signing up you agree to our <span className="terms_link">Terms &nbsp; Privacy Policy</span></p>
                                <div className="btn_div">
                                    <button className="btn">
                                        <Link to="/login">Register Account</Link>
                                    </button>
                                </div>
                                <p className="question_text">Already have an account? <Link to="/login" className="forgot_password">Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                {/* </div> */}
                <div className="empty"></div>
            </div>
        </div>
    )
}

export default Register
