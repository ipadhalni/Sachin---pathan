import React, { Component } from "react";
import "./buyerupdatedetail.css";

export default class BuyerUpdteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      email: "",
      name: "",
      address: "",
      town: "",
    };

    this.performupdatedetail = this.performupdatedetail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(e);
  }

  performupdatedetail = (e) => {
    // add user - POST
    var request = new Request(
      "https://vendor-buyer.herokuapp.com/api/updateDetails/updateUserDetails"
    );
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        name: this.state.name,
        address: this.state.address,
        town: this.state.town,
      }),
    };

    e.preventDefault();
    fetch(request, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 200) {
          this.props.history.push("/BuyerDashboard");
        } else {
          alert("Something is worng");
        }
        console.log(json.status);
      })

      .catch((error) => console.log("Authorization failed : " + error.message));
  };

  render() {
    return (
      <div className="buyer-update-body">
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
              <div className="image">
                <h4>
                  <center>Buyer Detail</center>
                </h4>
              </div>
            </div>
            <div className="body-form">
              <form onSubmit={this.performupdatedetail}>
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

                <button className="btn btn-secondary btn-block" type="submit">
                  Update Detail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
