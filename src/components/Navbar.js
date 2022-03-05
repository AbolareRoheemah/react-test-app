import React from 'react';
import '../styleSheet/Navbar.css';
import Logo from '../assets/images/logo.png';
import Avatar from '../assets/images/user-pic.png';
import Dropdown from '../assets/images/nav-dropdown.svg';

export default function Navbar() {
    const handleLogOut = () => {
        console.log('logged out')
    }

    return (
        <div className='nav_container'>
            <div className="nav_logo_div">
                <img src={Logo} alt="nav logo" />
            </div>
            <div className="main_nav">
                <p className="page_name">{}</p>
                <div className="user_info_div">
                    <div className="user_info_div">
                        <p className="name">Roheemah</p>
                        <img src={Avatar} alt="user_pic" className='avatar-pic' />
                        <img src={Dropdown} alt="dropdown" onClick={handleLogOut} />
                    </div>
                </div>
            </div>
        </div>
    )
}
