import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
//import HomeWorkIcon from '@material-ui/icons/HomeWork';
//import BorderColorIcon from '@material-ui/icons/BorderColor';
import './vendordashboard.css';
import {Notifications, ShoppingCart} from '@material-ui/icons';

export default function VendorDashboard(token) {
    console.log(token.location.state);
    return (
        <div>
            <div className="vendor-topbar">
                <div className="vendor-topbar-divied">
                    <div className="top-right">
                        <span className="vendor-Logo">E-Commerce Vendor Buyer Portal</span>
                    </div>
                    <div className="vendor-top-right">
                        <div className="vendor-topbar-icons-container">
                            <Notifications />
                            <span className="vendor-top-icon-bag">2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vendor-body-container">
                <div className="vendor-sidebar">
                    <div className="vendor-sidebar-divided">
                        <div className="vendor-sidebar-menu">
                            <h5 className="vendor-sidebar-title">
                                VendorDashboard
                            </h5>
                            <ul className="vendor-sidebar-list">
                                <li className="vendor-sidebar-listitem active">
                                    <Link to="./Home">Home</Link>
                                </li>
                                <li className="vendor-sidebar-listitem">
                                    <Link to="./MyProduct">My Product</Link>
                                </li>
                                <li className="vendor-sidebar-listitem">
                                    <Link to="./AddProduct">Add Product</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="buyer-other-unit">
                    
                </div>
            </div>
        </div>
    )
}
