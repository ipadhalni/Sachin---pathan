import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./listofshop.css";
import Store from "@material-ui/icons/Store";
import { useHistory } from "react-router";

let shoparr = {
  1: "med",
  2: "gen",
};

export default class ListOfShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      shopname:  "Das" ,
    };
  }

  componentDidMount() {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6InRlc3QxMjEyQHRlc3QuY29tIiwiZXhwIjoxNjI5ODE2MzcwLCJlbWFpbCI6InRlc3QxMjEyQHRlc3QuY29tIn0.zoq8rSEcVQppbfWvNQzKV_XT4WTEXwxg89_tSG9iP0I";
    var request = new Request(
      `https://vendor-buyer.herokuapp.com/api/shop/search?search_key=${this.state.shopname}`
    );
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `Bearer ${token}`,
        Accept: "application/json",
      },
      
    };
    // e.preventDefault();
    fetch(request, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        if (json["status code"] === 200) {
          this.setState({ shops: json.shops });
          console.log("json", json);

          // this.props.history.push('/VendorDashboard',this.token = json.token);
        } else {
          alert(" Data not Found");
        }
        console.log(json.status);
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
  }

  render() {
    console.log("shoplist", this.state.shops);
    return (
      <div className="shop-list">
        {this.state.shops.map((item) => {
          return (
            <div className="shop-list-item" key={item.id}>
            <Link to="/ProductCard">
                <p>
                  <label>
                    <Store style={{ fontSize: "60px" }} /> {item.shop_name}
                  </label>
                </p>
                <p>
                  <label>{shoparr[item.category_id]}</label>
                </p>
                {/* <p><label>{item.shop_name}</label></p> */}
             
            </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
