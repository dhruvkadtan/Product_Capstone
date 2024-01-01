import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik ,Form, Field} from "formik";
import {toast, ToastContainer} from 'react-toastify';
import "../../node_modules/react-toastify/dist/ReactToastify.css"
import PromptCheck from "../data/PromptCheck";
import userSchema from "../data/userSchema";
import * as Yup from "yup";
import { useFormControl } from "@material-ui/core";


const  EditUser = ({match}) => {

    const [user,setUser] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetchUser();
        
    },[])

    const userSchema = Yup.object().shape({
    
        first : Yup.string().required("First name is required"),
    
        last : Yup.string().required("Last name is required"),
        
        location : Yup.string().required("Location is required"),
    
        mobile : Yup.number().required("Mobile Number is required")
                            
    })          
    

    const fetchUser = () => {
        axios.get(`http://localhost:3002/users/?email=${match.params.email}`)
                .then((res) => setUser(res.data))
                .catch((err) => console.log(err));
    }
    const handleSubmit = async (values) => {

        console.log(values)
        try{
           await axios.put(`http://localhost:3002/users/${values.id}`,values)
            .catch((err) => console.log(err))

            toast.info("User updated Successfully", {position: toast.POSITION.TOP_CENTER, autoClose:2000});

            setTimeout(() => history.push("/products"),3000)
        } catch(e) {
            console.log(e)
        }
       
    }
    return(
        <div className="container-xxl">
            <div className="container">
                <div className="text-center mx-auto mb-5 mt-3">
                    <h3 className="text-secondary">Edit Your Information</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 ">
                        {user.map((u) => {
                            return (
                                <Formik initialValues={{id:`${u.id}`,password:`${u.password}`,email: `${u.email}`,first:`${u.first}`,last:`${u.last}`,location:`${u.location}`,mobile:`${u.mobile}`}}
                                        
                                        validationSchema={userSchema}
                                        onSubmit={(values) => handleSubmit(values)}
                                                                        >
                                    { ({errors,touched}) => (
                                            <Form>
                                                <PromptCheck/>
                                                <div className="row">
                                                    <div className="col-12 mb-3">
                                                        <label className="form-label text-secondary fw-bold" htmlFor="email">User ID : </label>
                                                        <input name="email" className="form-control" value={u.email} disabled/>
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
                                                    <div className="col-md-6 text-center">
                                                        <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                                type="submit">Update</button>
                                                        <ToastContainer/>
                                                    </div>
                                                    <div className="col-md-6 text-center">
                                                        <button className="form-control btn btn-secondary rounded-pill fw-bold"
                                                            onClick={() => history.push("/products")}    >Back</button>
                                                        
                                                    </div>
                                                </div>
                                            </Form>
                                    
                                        )}
                                </Formik>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser;