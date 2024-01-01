import { Field, Form, Formik } from "formik";
import React from "react";

import productSchema from "../data/productSchema";
import {toast, ToastContainer} from 'react-toastify';
import "../../node_modules/react-toastify/dist/ReactToastify.css"
import { useHistory } from "react-router-dom";

const PassReset = () =>{

    let history = useHistory();

    const handleReset = () => {
        toast.info("Reset Link sent to email successfully", {position: toast.POSITION.TOP_CENTER,autoClose:2000});
        setTimeout(() => document.getElementById("back").click(),3000)
    }
        return (
            <div className="container-xxl">
                <div className="container">
                    <div className="text-center mx-auto mb-5 mt-3">
                        <h3 className="text-secondary">Forgot Password</h3>
                    </div>
                    <div  className="row justify-content-center">
                        <div className="col-lg-6 ">
                            <Formik initialValues={{userId : ""}}
                                    validationSchema={productSchema}
                                    
                            >
                                {  ({touched,errors}) => (
                                    <Form>
                                        <div className="row ms-5 me-5">
                                            <div className="col-12 mb-3">               
                                                <label className="form-label text-secondary fw-bold" htmlFor="userId">Enter your email: </label>
                                                    <Field
                                                        type="email"
                                                        name="userId"
                                                        placeholder="Enter your user email"
                                                        className="form-control"
                                                                />
                                                    {touched.userId && errors.userId && <span style={{color : 'red'}}>{errors.userId}</span>}                   
                                             </div>
                                            <div className="col-md-6 text-center mb-3">
                                                <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                        onClick={handleReset}
                                                        type="button">Reset</button>
                                                <ToastContainer/>
                                            </div>
                                            <div className="col-md-6 text-center mb-3">
                                                <button  className="form-control btn btn-secondary rounded-pill fw-bold"
                                                            onClick={() => history.goBack()}>
                                                    Back
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>   
            </div>
        )
        
}
export default PassReset;

/*   <NavLink className="form-control btn btn-secondary rounded-pill fw-bold"
                                                to="/signin">Back</NavLink> */