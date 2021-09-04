import React from 'react';
//import HomeIcon from '@material-ui/icons'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import NavBar from './navbar/NavBar';
import {Link} from 'react-router-dom';
import home1 from '../home1.jpg'
import './home.css';


export default function Home() {
    return (
        <div>
            <div className="home-topbar">
                <div className="home-topbar-divied">
                    <div className="top-right">
                        <span className="home-Logo">E-Commerce Vendor Buyer Portal</span>
                    </div>
                    <div className="home-top-right">
                        <div className="home-topbar-icons-container">
                            <Link to='./VendorDashboard'>VendorDashboard</Link>
                        </div>
                        <div className="home-topbar-icons-container">
                            <Link to='./BuyerDashboard'>BuyerDashboard</Link>
                        </div>
                        <div className="home-topbar-icons-container">
                            <Link to='./Login'>Login</Link>
                        </div>
                        <div className="home-topbar-icons-container">
                            <Link to='./Signup'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-body-container">
                <div className="home-center-container">
                        <img src={home1} style={{ height: "600px", width: "1365px" }} />
                </div>
            </div>
        </div>
    )
}


