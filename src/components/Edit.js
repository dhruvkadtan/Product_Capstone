import { useState,useEffect } from "react";
import axios from "axios";
import { Formik ,Form, Field} from "formik";
import { useHistory } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import "../../node_modules/react-toastify/dist/ReactToastify.css"
import PromptCheck from "../data/PromptCheck";
import * as Yup from "yup";

const Edit = ({match}) => {
    const [data,setData] = useState([]);
    let history = useHistory();
    

    useEffect(() => {
        fetchProduct();
        
    })
    const productSchema = Yup.object().shape({
        productName : Yup.string().required("Product Name is Required"),
    
        productDes : Yup.string().required("Product Description is Required"),
    
        manufacturer : Yup.string().required("Manufacturer is Required"),
    
        quantity : Yup.number().required("Quantity is required")
                    .moreThan(0,"Should be greater than 0")
                    .positive("Should be positive")
                    .integer("Should be integer only"),
    
        price : Yup.number().required("Price is required")
                    .moreThan(0,"Should be greater than 0")
                    .positive("Should be positive"),
        
        distributor : Yup.string().required("Distributor's Name is Required"),
        
        vendor : Yup.string().required("Your Name is Required"),
        })      
    

    const fetchProduct = () => {
      
        axios.get(`http://localhost:3001/products/?productName=${match.params.productName}`)
                .then((res) => {setData(res.data)})
                .catch((err) => console.log(err)) 
        
    }

    const handleSubmit = async (values) => {

        try{
           await axios.put(`http://localhost:3001/products/${values.id}`,values)
            .catch((err) => console.log(err))

            toast.info("Product Changed Successfully", {position: toast.POSITION.TOP_CENTER, autoClose:2000});

            setTimeout(() => history.push("/products"),3000)
        } catch(e) {
            console.log(e)
        }
       
    }

    return(
        <div className="container-xxl">
            <div className="container">
                <div className="text-center mx-auto mb-5 mt-3">
                        <h3 className="text-secondary">Edit Product</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 ">
                        {data.map((p) => {
                            return (
                                <Formik
                                    initialValues={{id:`${p.id}`,productName:`${p.productName}`,productDes:`${p.productDes}`,manufacturer:`${p.manufacturer}`,
                                                    quantity:`${p.quantity}`,price:`${p.price}`,distributor:`${p.distributor}`,vendor:`${p.vendor}`,
                                                    count:`${p.count}`,date:`${p.date}`}}
                                    validationSchema={productSchema}    
                                    onSubmit={(values) => handleSubmit(values)}
                                >
                                    {  ({errors,touched}) => (
                                        <Form>
                                            <PromptCheck/>
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
                                                <div className="col-12 mb-3">
                                                    <label className="form-label text-secondary fw-bold" htmlFor="productDes">Product Description: </label>
                                                    <Field
                                                        name="productDes"
                                                        type="text"
                                                        placeholder="Enter product Description"
                                                        className="form-control"
                                                    />
                                                    {touched.productDes && errors.productDes && <span style={{ color: 'red' }}>{errors.productDes}</span>}
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="form-label text-secondary fw-bold" htmlFor="manufacturer">Manufacturer: </label>
                                                    <Field
                                                        name="manufacturer"
                                                        type="text"
                                                        placeholder="Enter manufacturer"
                                                        className="form-control"
                                                    />
                                                    {touched.manufacturer && errors.manufacturer && <span style={{ color: 'red' }}>{errors.manufacturer}</span>}
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label text-secondary fw-bold" htmlFor="quantity">Quantity: </label>
                                                    <Field
                                                        name="quantity"
                                                        type="number"
                                                        placeholder="Enter quantity"
                                                        className="form-control"
                                                    />
                                                    {touched.quantity && errors.quantity && <span style={{ color: 'red' }}>{errors.quantity}</span>}
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label text-secondary fw-bold" htmlFor="price">Price: </label>
                                                    <Field
                                                        name="price"
                                                        type="number"
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
                                                    <button   className="form-control btn btn-secondary rounded-pill fw-bold"
                                                            onClick={() => history.goBack()}>
                                                    Back
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                        
                                        )
                                    }

                                </Formik>
                       
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;