import React from 'react'
import Navbar from './Navbar'
import CardIcon from '../assets/images/card-icon.svg'
import Logo from '../assets/images/logo.png';
import '../styleSheet/Navbar.css';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="logo-div">
                <img src={Logo} alt="" />
            </div>
            <div className="cards_div">
                <div className="cards">
                    <div className="card-header">
                        <p className="title">Total SMS Balance</p>
                        <img src={CardIcon} alt="" className="card_icon" />
                    </div>
                    <div className="card_body">
                        <p className="login_amt">50</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card-header">
                        <p className="title">Total SMS Balance</p>
                        <img src={CardIcon} alt="" className="card_icon" />
                    </div>
                    <div className="card_body">
                        <p className="login_amt">50</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
