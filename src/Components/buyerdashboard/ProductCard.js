import React, { Component } from "react";
import "./productcard.css";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6InRlc3QxMjEyQHRlc3QuY29tIiwiZXhwIjoxNjI5ODE2MzcwLCJlbWFpbCI6InRlc3QxMjEyQHRlc3QuY29tIn0.zoq8rSEcVQppbfWvNQzKV_XT4WTEXwxg89_tSG9iP0I";
    var request = new Request(
      "https://vendor-buyer.herokuapp.com/api/product/getProducts?vendor_id=9"
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
        if (json["status code"] === 200) {
          this.setState({ products: json.products });
          console.log("json", json);

          // this.props.history.push('/VendorDashboard',this.token = json.token);
        } else {
          alert(" Data not found");
        }
        console.log(json.status);
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
  }

  render() {
    console.log("products", this.state.products);
    return (
      <div className="product-card">
        {this.state.products.map((item) => {
          return (
            <div className="product-card-item" key={item.id}>
              <span className="product-card-itmetitle">{item.name}</span>
              <p className="quantity">{item.quantity}</p>
              <p className="price">${item.rate}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
