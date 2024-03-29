import React, { useState } from 'react';
import '../styleSheet/Navbar.css';
import Avatar from '../assets/images/user-pic.png';
import Dropdown from '../assets/images/nav-dropdown.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUserDetails } from '../reducers/user/userSlice'

export default function Navbar() {
    const nav = useNavigate()
    // const id = 123
    const [showDropdown, setShowDropdown] = useState(false)
    const userName = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        console.log('called1')
        console.log('called')
        nav('/login')
        dispatch(clearUserDetails({}))
    }

    return (
        <div className='nav_container'>
            {/* <div className="nav_logo_div"> */}
            <Link to="/dashboard" className="forgot_password">
            <div className="nav_logo_div">
                    <p>ARA</p>
                </div>
            </Link>
            {/* </div> */}
            <div className="main_nav">
                <p className="page_name">{}</p>
                <div className="user_info_div">
                    <div className="user_info_div" onClick={() => {setShowDropdown(!showDropdown)}}>
                        <p className="name">{userName.name}</p>
                        <img src={Avatar} alt="user_pic" className='avatar-pic' />
                        <img src={Dropdown} alt="dropdown" />
                    </div>
                    {
                        showDropdown &&
                        <div className="logout-ctn">
                            <p className="logout-text" onClick={handleLogOut}>Logout</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
