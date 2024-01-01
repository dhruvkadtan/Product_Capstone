import React from "react";
import "../App.css"
import Products from "./products";


export default class ProductList extends React.Component{

    constructor(props) {
        super();
       
    }
    render() {
        const data = this.props.products;
        
    
        let productNodes = data.map(product => (
            <Products key={product.id} id = {product.id}
                productName = {product.productName} productDes = {product.productDes} 
                quantity = {product.quantity} 
                manufacturer = {product.manufacturer}
                price = {product.price} pcheck={this.props.pcheck} qcheck={this.props.qcheck}
                dcheck={this.props.dcheck} />
        ))  
        return(
        <>
            <div className="card mt-3 mb-3  bg-secondary"> 
                <div className="row text-center">
                    <div className="col text-white">
                        
                                                                    
                    </div>
                    <div className="col text-white">Product Name</div>
                    {this.props.dcheck === true ?<div className="col text-white">Description</div>:<></>}
                    <div className="col text-white">Manufacturer</div>
                    {this.props.qcheck === true ? <div className="col text-white">Quantity</div> :<></>}
                    {this.props.pcheck === true ?  <div className="col text-white">Price</div> :<></> }
                    <div className="col text-white ">Edit</div>
                    <div className="col text-white">Delete</div>
                </div>
            </div>

            {productNodes}
        </>
                
        )
    }
}