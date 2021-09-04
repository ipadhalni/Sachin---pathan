import React from "react";
import { Link } from "react-router-dom";
//import HomeIcon from "@material-ui/icons/Home";
import ListOfShop from "./ListOfShop";
import "./buyerdashboard.css";
import {Notifications, ShoppingCart, Search } from '@material-ui/icons';


export default function BuyerDashboard() {
    return (
        <div>
            <div className="buyer-topbar">
                <div className="buyer-topbar-divied">
                    <div className="top-right">
                        <span className="buyer-Logo">E-Commerce Vendor Buyer Portal</span>
                    </div>
                    <div className="buyer-top-right">
                        <div className="buyer-topbar-icons-container">
                            <input type="search" id="searchbar" aria-label="Search" placeholder="Search Shop"/>
                        </div>
                        <div className="buyer-topbar-icons-container">

                            <Search />
                        </div>
                        <div className="buyer-topbar-icons-container">
                            <Notifications />
                            <span className="buyer-top-icon-bag">2</span>
                        </div>
                        <div className="buyer-topbar-icons-container">
                            <ShoppingCart />
                            <span className="buyer-top-icon-bag">2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buyer-body-container">
                <div className="buyer-sidebar">
                    <div className="buyer-sidebar-divided">
                        <div className="buyer-sidebar-menu">
                            <h5 className="buyer-sidebar-title">
                                BuyerDashboard
                            </h5>
                            <ul className="buyer-sidebar-list">
                                <li className="buyer-sidebar-listitem active">
                                    <Link to="./Home">Home</Link>
                                </li>
                                <li className="buyer-sidebar-listitem">
                                    <Link to="./BuyerUpdteDetail">Buyer Update Detail</Link>
                                </li>
                                <li className="buyer-sidebar-listitem">
                                    <Link to="./UpdatePassword">Update Password</Link>
                                </li>
                                <li className="buyer-sidebar-listitem">
                                    <Link to="./UpdatePassword">Card item</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="buyer-other-unit">
                    
                        <ListOfShop />
                    
                </div>
            </div>
        </div>
        // <h4 >BuyerDashboard</h4>
        // <Link className="nav-link" to={"/cart"}>
        //     <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />Cart
        // </Link>
    );
}
