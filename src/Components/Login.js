import React from "react";
import { Link } from "react-router-dom";
//import { useJwt } from "react-jwt";
import "./login.css";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6InRlc3QxMjEyQHRlc3QuY29tIiwiZXhwIjoxNjI5ODE2MzcwLCJlbWFpbCI6InRlc3QxMjEyQHRlc3QuY29tIn0.zoq8rSEcVQppbfWvNQzKV_XT4WTEXwxg89_tSG9iP0I";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.performSignIn = this.performSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  performSignIn = (e) => {
    //var request = new Request('http://localhost:8000/testapi/');
    var request = new Request(
      "https://vendor-buyer.herokuapp.com/api/accounts/signin"
    );
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    };
    e.preventDefault();
    fetch(request, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json["status code"] === 200) {
          this.props.history.push("/VendorDashboard",
            (this.token = json.token)
          );
          // const { decodedToken, isExpired } = useJwt(json.token);
        } else {
          alert(" Username and password is invalid");
        }
        console.log(json.status);
      })
      // .then(this.context.router.push("/VendorDashboard") )
      .catch((error) => console.log("Authorization failed : " + error.message));
  };

  render() {
    return (
      <div className="login-body">
        <div className="container">
          <div className="form-box">
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
              <form onSubmit={this.performSignIn}>
                {/* <div className="input-group mb-3 font-size-cust">
        
        
                        <label>Login as</label>
                        <input type="radio" className="form-control" name="login" required/>Buyer
                        <input type="radio" className="form-control" name="login" required/>Vendor
    
    
                    </div> */}

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
                    name="email"
                    value={this.state.email}
                    onChange={(e) =>
                      this.handleChange({ email: e.target.value })
                    }
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
                    name="password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.handleChange({ password: e.target.value })
                    }
                    required
                  />
                </div>
                <button type="submit" className="btn btn-secondary btn-block">
                  LOGIN
                </button>
                <div className="message">
                  <div>
                    <input type="checkbox" /> Remember ME
                  </div>
                  <div>
                    <Link to="/Signup">Forgot your password</Link>
                  </div>
                </div>
                <div className="link_para">
                  <div>
                    <Link to="/Signup">Signup</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
