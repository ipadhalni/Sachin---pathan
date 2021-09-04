import React, { Component } from 'react';
import './updatepassword.css';



export default class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.state={
            old_password:'',
            new_password:''
        }
        this.performupdatepassword = this.performupdatepassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState(e);
    }

    performupdatepassword = (e) => {
        
        //var request = new Request('http://localhost:8000/testapi/');
        var request = new Request('https://vendor-buyer.herokuapp.com/api/updateDetails/changePassword');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                     'Accept': 'application/json', 
                    },
                    "body": JSON.stringify({

                        old_password: this.state.old_password,
                        new_password: this.state.new_password,
                    })
        };
        e.preventDefault();
        fetch(request,requestOptions)
          .then(response => response.json())
          .then(json => {
                if(json.status===200)
                {
                    this.props.history.push('/VendorDashboard')

                }
                else{
                    alert("Oops you have entered wrong username & password")
                    
                }
              console.log(json.status)
          })
         // .then(this.context.router.push("/VendorDashboard") )
          .catch(error => console.log('Authorization failed : ' + error.message));
    }

    render() {
        return (
            <div className="update-body">
            <div className="container">
                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-lock-circle" style={{fontSize:"110px"}}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                            <form onSubmit={this.performupdatepassword}>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        </div>
                                            <input type="password" className="form-control" placeholder="Old Password" name="oldpassword" value={this.state.old_password} onChange={(e) => this.handleChange({old_password:e.target.value})} required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="New Password" name="newpassword" value={this.state.new_password} onChange={(e) => this.handleChange({new_password:e.target.value})} required />
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-block"  >Update Password</button>

                            </form>
            
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
