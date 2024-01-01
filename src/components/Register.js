import React from "react";
import {Formik, Form, Field} from "formik"
import * as Yup from "yup";
import axios from "axios";
import {v4 as uuid} from "uuid";
import {toast, ToastContainer} from 'react-toastify';
import "../../node_modules/react-toastify/dist/ReactToastify.css"
import PromptCheck from "../data/PromptCheck";
import userSchema from "../data/userSchema";

 const Register  = () => {
    
    const handleSubmit = (values) => {
       
        const user = { id : uuid(), ...values}
        axios.post(`http://localhost:3002/users`,user)
        .then( response => console.log(response))
        .catch(error => console.log(error)) 
        
        toast.info("User Added Successfully", {position: toast.POSITION.TOP_CENTER,autoClose:2000});
       
    }

        return (
            <div className="container-xxl">
                <div className="container">
                    <div className="text-center mx-auto mb-5 mt-3">
                        <h3 className="text-secondary">Register</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                     
                 <Formik initialValues={{email: "", password:"",first:"",last:"",location:"",mobile:""}}
                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={userSchema}
                    >
                     {  ({errors,touched}) => (
                            <Form>
                                
                                <PromptCheck/>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <label className="form-label text-secondary fw-bold" htmlFor="email">User ID : </label>
                                        <Field 
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="form-control"
                                        />
                                        {touched.email && errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                                    </div>
                                    <div  className="col-12 mb-3">
                                        <label  className="form-label text-secondary fw-bold" htmlFor="password">Password : </label>
                                        <Field 
                                            type="password"
                                            name="password"
                                            placeholder="Enter Password"
                                            className="form-control"
                                        />
                                        {touched.password && errors.password && <span style={{color : 'red'}}>{errors.password}</span>}
                                    </div>
                                    <div  className="col-md-6 mb-3">
                                        <label  className="form-label text-secondary fw-bold" htmlFor="first">First Name : </label>
                                        <Field 
                                            type="text"
                                            name="first"
                                            placeholder="Enter your First Name"
                                            className="form-control"
                                        />
                                        {touched.first && errors.first && <span style={{color : 'red'}}>{errors.first}</span>}
                                    </div>
                                    <div  className="col-md-6 mb-3">
                                        <label  className="form-label text-secondary fw-bold" htmlFor="last">Last Name : </label>
                                        <Field
                                            type="text"
                                            name="last"
                                            placeholder="Enter your last name"
                                            className="form-control"
                                        />
                                        {touched.last && errors.last && <span style={{color : 'red'}}>{errors.last}</span>}
                                    </div>
                                    <div  className="col-12 mb-3">
                                        <label  className="form-label text-secondary fw-bold" htmlFor="location">Location : </label>
                                        <Field
                                            type="text"
                                            name="location"
                                            placeholder="Enter your Location"
                                            className="form-control"
                                        />
                                        {touched.location && errors.location && <span style={{color : 'red'}}>{errors.location}</span>}
                                    </div>
                                    <div  className="col-12 mb-3">
                                        <label  className="form-label text-secondary fw-bold" htmlFor="mobile">Mobile no : </label>
                                        <Field
                                            type="text"
                                            name="mobile"
                                            placeholder="Enter your mobile number"
                                            className="form-control"
                                        />
                                        {touched.mobile && errors.mobile && <span style={{color : 'red'}}>{errors.mobile}</span>}
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                type="submit">Register</button>
                                        <ToastContainer/>
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

export default Register;

