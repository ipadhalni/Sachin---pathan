import React from 'react';
import './acceptorder.css';

export default class AcceptOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orderid: '',
            orderstatus: '',
            deliverytime: ''        }
    }
    handelChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="accept-body">
            <div className="container">
                <div className="form-box">
                        <div className="header-form">
                            <h4 className="text-primary text-center"><i className="fa fa-product-hunt" style={{fontSize:"110px"}}></i></h4>
                            <div className="image">
                                <h4><center>Accept Order</center></h4>
                            </div>
                        </div>
                        <div className="body-form">
                            <form >
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-product-hunt"></i></span>
                                    </div>
                                        <input type="text" className="form-control" placeholder="Order Id"  required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-product-hunt"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Order Status" required />
                                </div>
                                
                               
                                <div>
                                <button type="button" className="btn btn-secondary btn-block">AcceptOrder</button>
                                <button type="button" className="btn btn-secondary btn-block">RejectOrder</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}
