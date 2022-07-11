import React, { useState, useEffect } from 'react'
import '../styleSheet/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthImage from '../assets/images/new-beta-lady.jpeg'
import Eye from '../assets/images/eye.svg'
import { useSelector } from 'react-redux'
// import { increment, decrement, incrementByAmt } from '../reducers/posts/postSlice'
// import {save, log_in, increment} from '../actions'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    let nav = useNavigate()
    const userDetails = useSelector(state => state.user.user)
    // const post = useSelector(state => state.posts.value)
    const login = (e) => {
        e.preventDefault()
        setLoading(true)
        if (email === userDetails.email && password === userDetails.password) {
            nav('/dashboard')
        } else {
            setLoading(false)
            setTimeout(() => {
                setError('Invalid details')
            }, 3000)
        }
    }
    
    return (
        <div className="login_container">
            <div className="login_image_container" style={{ backgroundImage:`url(${AuthImage})` }}>
                    <div className="login_card">
                        <div className="login_logo_div">
                            <p>ARA</p>
                        </div>

                        {/* <div onClick={() => dispatch(incrementByAmt(5))}>{post}</div> */}
                        <div className="text_form">
                            <div className="welcome_text_div">
                                <p className="error_msg">{error}</p>
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
                                        {loading ? 
                                        <div>
                                            <p className='spinner'></p>
                                        </div>
                                        : 
                                        <p>Sign In</p>}
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
