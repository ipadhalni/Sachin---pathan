import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { createBrowserHistory } from "history";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import VendorDashboard from "../Components/VendorDashboard";
import AddProduct from "../Components/AddProduct";
import App from '../App'
import Home from "../Components/Home";
import EditProduct from "../Components/EditProduct";
import AcceptOrder from "../Components/AcceptOrder";
import UpdatePassword from "../Components/buyerdashboard/UpdatePassword";
import BuyerDashboard from "../Components/buyerdashboard/BuyerDashboard";
import ProductCard from "../Components/buyerdashboard/ProductCard";
import BuyerUpdteDetail from "../Components/buyerdashboard/BuyerUpdteDetail";
import MyProduct from "../Components/MyProduct";

const browserHistory = createBrowserHistory();

export default function route() {
    return (
        <div>
            <Router history={browserHistory}>
                <Switch>
                    <Route  path="/Signup" component={Signup} >
                    </Route>
                    
                    <Route  path="/Login" component={Login} >
                    </Route>

                    <Route  path="/Home" component={Home} >
                    </Route>

                   <Route  path="/VendorDashboard" component={VendorDashboard} >
                    </Route>

                    <Route  path="/BuyerDashboard" component={BuyerDashboard} >
                    </Route>

                    <Route  path="/BuyerUpdteDetail" component={BuyerUpdteDetail} >
                    </Route>

                    <Route  path="/ProductCard" component={ProductCard} >
                    </Route>

                    <Route  path="/MyProduct" component={MyProduct} >
                    </Route>

                    <Route  path="/AddProduct" component={AddProduct} >
                    </Route>

                    <Route  path="/EditProduct" component={EditProduct} > 
                    </Route>

                    <Route  path="/AcceptOrder" component={AcceptOrder} > 
                    </Route>

                    <Route  path="/UpdatePassword" component={UpdatePassword} > 
                    </Route>

                    

                    <Route exact path="/" component={App} >
                    </Route>
                 
                </Switch>
            </Router>
        </div>
    )
}
