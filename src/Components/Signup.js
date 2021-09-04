import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      email: "",
      password: "",
      name: "",
      address: "",
      town: "",
      user_type: "",
      shop_name: "buyer",
      category: "1",
    };

    this.performsignup = this.performsignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handelRadio = this.handelRadio.bind(this);
    this.handelRadioCategory = this.handelRadioCategory.bind(this);
  }

  handleChange(e) {
    this.setState(e);
    // console.log("ye mera console agya.........");
    // this.setState not return a value -- Sachin
    //    this.setState({
    //     [e.target.name]: e.target.value,
    // });

    //console.log("ye mera console 2........."+e.email+"--"+e);
  }

  performsignup = (e) => {
    // var email;
    // add user - POST
    var request = new Request(
      "https://vendor-buyer.herokuapp.com/api/accounts/signup"
    );
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization':'Bearer '+email,
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        name: this.state.name,
        address: this.state.address,
        town: this.state.town,
        user_type: this.state.user_type,
        vendor: {
          shop_name: this.state.shop_name,
          category: this.state.category,
        },
      }),
    };

    e.preventDefault();
    console.log(this.state.user_type);
    fetch(request, requestOptions)
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
        if (json['success'] === 'True') {
          this.props.history.push("/Login");
        } else {
          alert(json.message);
        }
        console.log(json.status);
      })
      // .then(this.context.router.push("/VendorDashboard") )
      .catch((error) => console.log("Authorization failed : " + error.message));
  };

  // handleChange = (e) => {
  //     this.setState({[e.target.name]: e.target.value})
  // }

  handelRadio = (e) => {
    this.setState({ user_type: e.target.value });
  };

  handelRadioCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  render() {
    // const API_KEY =`${process.env.REACT_APP_API_KEY}`
    // console.log("API", API_KEY)
    return (
      <div className="signup-body">
      <div className="container">
        <div className="form-box-signup">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form onSubmit={this.performsignup}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={(e) => this.handleChange({ phone: e.target.value })}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange({ email: e.target.value })}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) =>
                    this.handleChange({ password: e.target.value })
                  }
                  required
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.handleChange({ name: e.target.value })}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-home"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  value={this.state.address}
                  onChange={(e) =>
                    this.handleChange({ address: e.target.value })
                  }
                  required
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-home"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Home Town"
                  value={this.state.town}
                  onChange={(e) => this.handleChange({ town: e.target.value })}
                  required
                />
              </div>

              <div className="input-group mb-3 font-size-cust">
                <label>Signup as</label>
                <input
                  type="radio"
                  value="buyer"
                  className="form-control"
                  checked={this.state.user_type === "buyer"}
                  onChange={this.handelRadio}
                />
                Buyer
                <input
                  type="radio"
                  value="vendor"
                  className="form-control"
                  checked={this.state.user_type === "vendor"}
                  onChange={this.handelRadio}
                />
                Vendor
              </div>

              {this.state.user_type === "vendor" && (
                <div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa store"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your shop_name"
                      name="shop_name"
                      value={this.state.shop_name}
                      onChange={(e) =>
                        this.handleChange({ shop_name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="input-group mb-3 font-size-cate">
                    <label>Category</label>
                    <br></br>
                    <input
                      type="radio"
                      id="grocery"
                      name="category"
                      className="form-control"
                      value="1"
                      onChange={this.handelRadioCategory}
                      checked={this.state.category === "1"}
                      required
                    />
                    Grocery
                    <input
                      type="radio"
                      id="medicine"
                      name="category"
                      className="form-control"
                      value="2"
                      onChange={this.handelRadioCategory}
                      checked={this.state.category === "2"}
                      required
                    />
                    Medicine
                    {/* <input
                      type="radio"
                      id="general store"
                      className="form-control"
                      name="category"
                      value="3"
                      onChange={this.handelRadioCategory}
                      checked={this.state.category === "3"}
                      required
                    />
                    General Store */}
                  </div>
                </div>
              )}
            
              <button className="btn btn-secondary btn-block" type="submit">
                Signup
              </button>

              <div>
                <label id="label_signup">
                  have any account?
                  <Link to="/Login"> Login</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
