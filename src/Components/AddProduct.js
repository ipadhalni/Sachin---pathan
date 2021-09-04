import React from "react";
import "./addproduct.css";
import { isExpired, decodeToken } from "react-jwt";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJ1c2VybmFtZSI6InRlc3R2ZW5kZXJAdGVzdC5jb20iLCJleHAiOjE2Mjk4MTk3NjQsImVtYWlsIjoidGVzdHZlbmRlckB0ZXN0LmNvbSJ9.3IJU4qS8uMjgaSbXNDRc9ohHvPNh9Onw287DH-I9J_w"

const myDecodedToken = decodeToken(token);
const isMyTokenExpired = isExpired(token);

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: "",
      quantity: "",
      rate: "",
    };
    this.performaddproduct = this.performaddproduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    console.log(myDecodedToken.user_id)
  }

  

  handleChange = (e) => {
    this.setState(e);
  };

  performaddproduct = (e) => {
    // add user - POST
    var request = new Request(
      "https://vendor-buyer.herokuapp.com/api/product/addProduct"
    );
    const requestOptions = {
      method: "POST",
      headers: {
        // credentials: 'include',
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization':'Bearer '+token,
      },
      body: JSON.stringify({
        name: this.state.name,
        quantity: this.state.quantity,
        rate: this.state.rate,
        user:myDecodedToken.user_id,
        
      }),
    };
    console.log('onSubmit');
    console.log(requestOptions.headers);
    e.preventDefault();
   // console.log(this.state.user_type);
    fetch(request, requestOptions)
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
        if (json['success'] === 'True') {
          this.props.history.push("/VendorDashboard");
        } else {
          alert(json.message);
        }
       
      })
      // .then(this.context.router.push("/VendorDashboard") )
      .catch((error) => console.log("Authorization failed : " + error.message));
  };




  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="body-add">
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-product-hunt"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image">
              <h4>
                <center>Add Product</center>
              </h4>
            </div>
          </div>
          <div className="body-form">
            <form onSubmit={this.performaddproduct
            }>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-product-hunt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"

                  value={this.state.name}
                  onChange={(e) => this.handleChange({
                    name: e.target.value
                  })}

                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-product-hunt"></i>
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Add quantity Of Product"
                  value={this.state.quantity}
                  onChange={(e) => this.handleChange({
                    quantity: e.target.value
                  })}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-inr"></i>
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Add Rate"
                  min="0" step=".01"
                  value={this.state.rate}
                  onChange={(e) => this.handleChange({
                    rate: e.target.value
                  })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-block">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
