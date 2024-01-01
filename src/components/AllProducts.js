import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link,  useHistory } from "react-router-dom";
import "../App.css";
import { SignConsumer } from "../contextApi/SignContext";
import ProductApi from "../data/productApi";
import ProductList from "./ProductList";

const AllProducts = () => {
   
    const [products,setProducts] = useState([])
    const [search,setSearch] = useState("")
    const [filtered,setFiltered] = useState([])
    const [price,setPrice] = useState(true)
    const [quantity,setQuantity] = useState(true)
    const [des,setDes] = useState(true)
    

    const handleChange = (e) => {
        
        setSearch(e.target.value)

        if(search !== '') {
            const temp =  products.filter(
                (product) =>{
                    return Object.values(product).join('').toLowerCase().includes(search.toLowerCase())
                }
            )
            setFiltered(temp)
        } else 
            setFiltered(products)
    
    }

    useEffect(() => { 
        ProductApi.getAllProducts(data => setProducts(data))
        return(() => {
        
        })
    },[])

    var signInfo = "";
    const history = useHistory();

    const handle = () => {
        if(signInfo === "false") {
            confirmAlert({
                title : "Restricted",
                message : "Please Sign In First",
                buttons : [
                    {
                        label : "SignIn",
                        onClick : () => history.push("/signin")
                        
                    },
                    {
                        label : "Cancel",
                    }
                ]
            })
        }
               
    }

    const delet = (id) => {
        axios.delete(`http://localhost:3001/products/${id}`)
            const del = products.filter((p) => p.id !== id);
            setProducts(del)
            ProductApi.getAllProducts(data => setProducts(data))
        
        
     }

    const handleDelMul = (contextVal) => {
        
        if(signInfo === "false")
            handle()
        else {
            if(window.confirm("Are you sure want to delete?")) {
                
               console.log(contextVal.checkedArray)
                var newArray = [];
                newArray = contextVal.checkedArray.filter(function(elem, pos) {
                    return contextVal.checkedArray.indexOf(elem) === pos;
                });
                console.log(newArray)
                newArray.map((id) => {
                    delet(id)  

                        
                })
                ProductApi.getAllProducts(data => setProducts(data))
                newArray = [];
                contextVal.copyArray(newArray);
                console.log(contextVal.checkedArray);
                console.log(newArray)   
            }
        }   
    }

       
    return(
        <div className="container-fluid"> 
            <SignConsumer>
                {(contextVal) => (
                    <div>
                        
                        <h3 className="h3 mt-3 mb-3"><mark className=" rounded-pill bg-secondary text-white fw-bold">Products List</mark></h3>
        
                        <div className="row justify-content-between">
                            <div className="col-md-2 mb-2">
                                <input  type="text" onChange={handleChange} placeholder="Search Here..."/> 
                            </div>
                            <div className="col-md-2 mb-2 ">
                                <button onClick={() => handleDelMul(contextVal)} className="btn btn-secondary fw-bold">Delete Multiple</button>
                            </div>
                            <div className="col-md-1 mb-2 ">
                                <Link to="/analysis" className="btn btn-secondary fw-bold">Analysis</Link>
                            </div>
                            <div className="col-md-2 mb-2 ">
                               <button className="btn btn-secondary dropdown-toggle  fw-bold"
                                         data-bs-toggle="dropdown"
                                         aria-expanded="false"
                                         id="dropdownMenuLink">
                                    Custom Fields
                               </button>
                               <ul className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                    type="checkbox" 
                                                    value="" id="flexCheckDefault"
                                                    checked={des}
                                                    onChange={(e) => setDes(e.target.checked)}
                                                    />
                                             <label className="form-check-label fw-bold text-white"
                                                    htmlFor="flexCheckDefault">
                                                Description
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                    type="checkbox" 
                                                    value="" id="flexCheckDefault"
                                                    checked={price}
                                                    onChange={(e) => setPrice(e.target.checked)}
                                                    />
                                             <label className="form-check-label fw-bold text-white"
                                                    htmlFor="flexCheckDefault">
                                                Price
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                    type="checkbox" value="" id="flexCheckDefault"
                                                    checked={quantity}
                                                    onChange={(e) => setQuantity(e.target.checked)}/>
                                             <label className="form-check-label fw-bold text-white"
                                                  htmlFor="flexCheckDefault">
                                                Quantity
                                            </label>
                                        </div>
                                    </li>
                               </ul>
                            </div>
                            <div className="col-md-2 mb-2">
                            <Link   className="btn btn-secondary fw-bold"
                                    to={ (signInfo=contextVal.status)=== "false" ? "/products":"/products/addProduct"}
                                    onClick={handle}
                                    >Add Product</Link>
                            </div>
                        </div>
                        {search.length > 1 ? (<ProductList products={filtered} qcheck={quantity} 
                                                            pcheck={price} dcheck={des}/>)
                        : (<ProductList products={products} qcheck={quantity} 
                            pcheck={price} dcheck={des} />)}
                    </div>
                )} 
            </SignConsumer>
        </div>  
    )        
}

export default AllProducts;


/* 
 <div className="col-md-6 mb-2 justify-content-center">
                                <button onClick={() => handleMulDel(contextVal)} className="btn btn-secondary fw-bold">Delete Multiple</button>
                            </div>
*/
