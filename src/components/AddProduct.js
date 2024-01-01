import React from "react";
import {Formik, Form, Field} from "formik"
import {v4 as uuid} from "uuid";
import axios from "axios";
import productSchema from "../data/productSchema";
import { useHistory} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import "../../node_modules/react-toastify/dist/ReactToastify.css"
import PromptCheck from "../data/PromptCheck";



 const AddProduct = () => {
   
    let history = useHistory()
    var count = 0
    const handleSubmit = (values) => {
        if(count === 0) {
            const product = {id: uuid(),date : new Date().toLocaleString(),count : 0 ,...values}
            axios.post(`http://localhost:3001/products`,product)
            .then( response => console.log(response))
            .catch(error => console.log(error))  
            count++;
        
            toast.info("Product Added Successfully", {position: toast.POSITION.TOP_CENTER,autoClose:2000});

            setTimeout(() => history.goBack(),3000)
        
        }
    }
    
        return(
            <div className="container-xxl">
                <div className="container">
                    <div className="text-center mx-auto mb-5 mt-3">
                        <h3 className="text-secondary">Add Product</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <Formik initialValues={{productName:"",productDes:"",manufacturer:"",quantity:"",price:"",vendor:"",distributor:""}}
                                    validationSchema={productSchema}
                                    onSubmit={(values) => handleSubmit(values)}
                            >
                            {  ({errors,touched}) => (
                                <Form>
                                    <PromptCheck />
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="productName">Product Name: </label>
                                            <Field
                                                name="productName"
                                                type="text"
                                                placeholder="Enter product Name"
                                                className="form-control"
                                            />
                                            {touched.productName && errors.productName && <span style={{ color: 'red' }}>{errors.productName}</span>}
                                        </div>
                                        <div  className="col-12 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="productDes">Product Description: </label>
                                            <Field
                                                name="productDes"
                                                type="text"
                                                placeholder="Enter product Description"
                                                className="form-control"
                                            />
                                            {touched.productDes && errors.productDes && <span style={{ color: 'red' }}>{errors.productDes}</span>}
                                        </div>
                                        <div  className="col-12 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="manufacturer">Manufacturer: </label>
                                            <Field
                                                name="manufacturer"
                                                type="text"
                                                placeholder="Enter manufacturer"
                                                className="form-control"
                                            />
                                            {touched.manufacturer && errors.manufacturer && <span style={{ color: 'red' }}>{errors.manufacturer}</span>}
                                        </div>
                                        <div  className="col-md-6 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="quantity">Quantity: </label>
                                            <Field
                                                name="quantity"
                                                type="number"
                                                placeholder="Enter quantity"
                                                className="form-control"
                                            />
                                            {touched.quantity && errors.quantity && <span style={{ color: 'red' }}>{errors.quantity}</span>}
                                        </div>
                                        <div  className="col-md-6 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="price">Price: </label>
                                            <Field
                                                name="price"
                                                type="text"
                                                step="0.1"
                                                placeholder="Enter price"
                                                className="form-control"
                                            />
                                            {touched.price && errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="distributor">Distributor: </label>
                                            <Field
                                                name="distributor"
                                                type="text"
                                                placeholder="Enter Distributor's Name"
                                                className="form-control"
                                            />
                                            {touched.distributor && errors.distributor && <span style={{ color: 'red' }}>{errors.distributor}</span>}
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label text-secondary fw-bold" htmlFor="vendor">Your Name: </label>
                                            <Field
                                                name="vendor"
                                                type="text"
                                                placeholder="Enter Your Name"
                                                className="form-control"
                                            />
                                            {touched.vendor && errors.vendor && <span style={{ color: 'red' }}>{errors.vendor}</span>}
                                        </div>
                                       
                                        <div className="col-md-6 text-center">
                                            <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                    type="submit">Submit</button>
                                            <ToastContainer/>
                                           
                                        </div>
                                        <div className="col-md-6 text-center">
                                        <button id="back" className="form-control btn btn-secondary rounded-pill fw-bold"
                                                            onClick={() => history.goBack()}>
                                                    Back
                                                </button>
                                        </div>
                                    </div>
                                </Form>
                            )
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default AddProduct;