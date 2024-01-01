import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";



const ProductDetail =({match}) => {

    const [data,setData] = useState([]);
    const [post,setPost] = useState({
      id: "",
      date: "",
      productName: "",
      productDes: "",
      manufacturer: "",
      quantity: 0,
      price: "",
      vendor: "",
      distributor: "",
      count : 0
    });
    var id = "";
    let history = useHistory();

    useEffect(() => {
        fetchProduct();
        
    },[])

    const fetchProduct = () => {
        
        axios.get(`http://localhost:3001/products/?productName=${match.params.productName}`)
            .then((res) => {setData(res.data)})
            .catch((err) => console.log(err))
        
    }
    const postProduct = () => {
        data.map((p) => {
            id = p.id
            post.id = p.id;
            post.date = p.date;
            post.productName = p.productName;
            post.productDes = p.productDes;
            post.manufacturer = p.manufacturer;
            post.quantity = p.quantity;
            post.price = p.price;
            post.vendor = p.vendor;
            post.distributor = p.distributor;
            post.count = p.count + 1;
        })
        
        axios.put(`http://localhost:3001/products/${id}`,post)
            .catch((err) => console.log(err))
    }
   
    return (
        <div className="container-xxl">
            <div className="container">
                <div className="text-center mx-auto mb-5 mt-3">
                    <h3 className="text-secondary">Product Detail</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 ">
                            {data.map((p) => {
                                postProduct();
                                return(
                                    <div className="row">
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Product Name :</h4></div>
                                                <div className="col-md-6"><h4>{p.productName}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2 text-secondary fw-bold" >
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Product Description :</h4></div>
                                                <div className="col-md-6"><h4>{p.productDes}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Product Manufacturer :</h4></div>
                                                <div className="col-md-6"><h4>{p.manufacturer}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-8"><h4>Quantity :</h4></div>
                                                <div className="col-md-3"><h4>{p.quantity}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-md-6  mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Price :</h4></div>
                                                <div className="col-md-6"><h4>{p.price}</h4></div>   
                                            </div>
                                        </div>
                                       
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Added By :</h4></div>
                                                <div className="col-md-6"><h4>{p.vendor}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Distributor :</h4></div>
                                                <div className="col-md-6"><h4>{p.distributor}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>TimeStamp :</h4></div>
                                                <div className="col-md-6"><h4>{p.date}</h4></div>   
                                            </div>
                                        </div>
                                    
                                        <div className="col-12 text-center">
                                            <button  className="form-control btn btn-secondary rounded-pill fw-bold"
                                                         onClick={() => history.goBack()}>
                                                 Back
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
