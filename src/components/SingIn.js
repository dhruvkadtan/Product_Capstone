import axios from "axios";
import React from "react";
import {Formik, Form, Field} from "formik"
import * as Yup from "yup";
import "../App.css"
import { SignConsumer } from "../contextApi/SignContext";
import { NavLink } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import "../../node_modules/react-toastify/dist/ReactToastify.css"

const loginSchema = Yup.object().shape({
    userId : Yup.string().email("Invalid UserID Format")
                .required("User Id is required"),
    
    password : Yup.string().min(3,"Password must be minimum of 3 characters")
                .required("Password is required")
})


export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            users : [],
        }
    }

    signIn = (user,contextVal) => {
        var sign = contextVal.status
        if(contextVal.status === "false") {
            this.state.users.map((u) => {
                if(u.email === user.userId && u.password === user.password && contextVal.status === "false") {
                    contextVal.setUser(u.email);
                    contextVal.setFirst(u.first);
                    contextVal.setStatus("true");
                    sign = "true";
                    toast.info("Successfully Signed In", {position: toast.POSITION.TOP_CENTER, autoClose:2000});
                    setTimeout(() => document.getElementById("back").click(),3000);
                }
            })
            if(sign === "false") {
                alert("Invalid User")
          }
        } else 
            alert("Already signed in logout first")

    }
    
  

    componentDidMount() {
        axios.get("http://localhost:3002/users").then(response =>
            this.setState({users : response.data})
         ).catch(errors => this.console.log(errors))
    }


    render() {
        return (
            <div className="container-xxl">
                <div className="container">
                    <div className="text-center mx-auto mb-5 mt-3">
                        <h3 className="text-secondary">Sign In</h3>
                    </div>
                    <div  className="row justify-content-center">
                    <div className="col-lg-6 ">
                    <SignConsumer>
                        {(contextVal) => (
                            <Formik initialValues={{userId: "", password:""}}
                                onSubmit={(values) => this.signIn(values,contextVal)}
                                validationSchema={loginSchema}
                                >
                                {  ({touched,errors,isSubmitting,values}) => (
                                        <Form>
                                            <div className="row ms-5 me-5">
                                                <div className="col-12 mb-3">
                                                   
                                                    <label className="form-label text-secondary fw-bold" htmlFor="userId">User ID : </label>
                                                    <Field 
                                                        type="email"
                                                        name="userId"
                                                        placeholder="Enter your user ID"
                                                        className="form-control"
                                                    />
                                                    {touched.userId && errors.userId && <span style={{color : 'red'}}>{errors.userId}</span>}
                                                    
                                                </div>
                                                <div className="col-12 mb-3">
                                                   
                                                    <label className="form-label text-secondary fw-bold" htmlFor="password">Password : </label>
                                                    <Field 
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter Password"
                                                        className="form-control"
                                                    />
                                                    {touched.password && errors.password && <span style={{color : 'red'}}>{errors.password}</span>}
                                                </div>
                                               
                                                <div className="col-md-6 text-center mb-3">
                                                    <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                             type="submit">Sign In</button>
                                                    <ToastContainer/>
                                                </div>
                                                <div className="col-md-6 text-center mb-3">
                                                    <NavLink id="back" className="form-control btn btn-secondary rounded-pill fw-bold"
                                                    to="/products">Back</NavLink>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <NavLink className="form-control btn btn-secondary rounded-pill fw-bold"
                                                    to="/passreset">Forgot your password?</NavLink>
                                                </div>
                                            </div>
                                        </Form>
                                        
                                )
                                }
                            </Formik>
                        )}
                    </SignConsumer>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}