import axios from "axios";
import { Link, useHistory} from "react-router-dom";
import { SignConsumer } from "../contextApi/SignContext";
import { confirmAlert } from "react-confirm-alert";
import "../../node_modules/react-confirm-alert/src/react-confirm-alert.css"



const Products = ({id,productName,productDes,quantity,manufacturer,price,pcheck,qcheck,dcheck}) => {
    var signInfo = "";
    const editCond = `/products/edit/${productName}`
    const delCond =  {pathname: `/products/delete/${productName}`, state: {id}}
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

   
    const handleCheck = (e,contextVal) => {
        const {value,checked} = e.target;
        if(checked) { 
            
          contextVal.setChecked(value)
        }else {
            
          contextVal.filterChecked(value)
        }

        
    }
    
    return(
            <div>
              <SignConsumer> 
            
                {(contextVal) => (
                <div className="card mt-3 mb-3 bg-secondary "> 
                    <div className="row mt-3 text-center">
                        <div className="col">
                            <input className="form-check-input"
                                    type="checkbox" 
                                    value={id} id="flexCheckDefault"
                                    defaultChecked={false}
                                    onChange={(e) => handleCheck(e,contextVal)}
                            />
                        </div>
                        <div className="col">{<Link className="fw-bold text-white"
                                                to={`/products/details/${productName}`}
                                                >
                                {productName}
                                </Link>  }  </div>                
                        {dcheck === true ? <div className="col text-white">{productDes}</div>:<></>}
                        <div className="col text-white">{manufacturer}</div>
                        {pcheck === true ? <div className="col text-white">{quantity}</div> :<></>}
                        {qcheck === true ? <div className="col text-white">{price}</div> :<></>}
                        <div className="col"><Link className="btn btn-secondary rounded-pill fw-bold border-white"
                                                   to={(signInfo=contextVal.status)=== "false" ? "/products" : editCond} 
                                                   onClick={handle}>Edit</Link></div>
                        <div className="col"> 
                        <Link className="btn btn-secondary rounded-pill fw-bold border-white" 
                                                   to={(signInfo=contextVal.status) === "false" ?  "/products" : delCond  } 
                                                   onClick={handle}>Delete</Link>
                        </div>
                    </div>  
                </div>
                )}
                </SignConsumer>
                </div>

    )   

}
export default Products;

/*   
        <Link className="btn btn-secondary rounded-pill fw-bold border-white" 
                                                   to={(signInfo=contextVal.status) === "false" ?  "/products" : delCond  } 
                                                   onClick={handleDelete}>Delete</Link>            
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   */