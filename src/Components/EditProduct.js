import React from 'react';
import './editproduct.css';

export default class EditProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
            productid: '',
            name: '',
            quantity: '',
            rate: ''

        }
    }
    render() {
        return (
            <div className="body-edit">
            <div className="container">
                <div className="form-box">
                        <div className="header-form">
                            <h4 className="text-primary text-center"><i className="fa fa-product-hunt" aria-hidden="true" style={{fontSize:"110px"}}></i></h4>
                            <div className="image">
                                <h4><center>Edit Product</center></h4>
                            </div>
                        </div>
                    <div className="body-form">
                            <form >
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                                    </div>
                                        <input type="text" className="form-control" placeholder="Product Id"  required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-product-hunt"></i></span>
                                    </div>
                                        <input type="text" className="form-control" placeholder="Product Id"  required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-product-hunt"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Product Name" required />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-product-hunt"></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="Add quantity Of Product" required />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-inr"></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="Add Rate" required />
                                </div>
                                <button type="button" className="btn btn-secondary btn-block">Edit Product</button>
                            
                            </form>
                    </div>
                </div>
            </div> 
            </div>
        )
    }
}