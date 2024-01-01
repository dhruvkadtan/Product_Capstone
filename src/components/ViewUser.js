import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const  ViewUser = ({match}) => {

    const [user,setUser] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetchUser();
        
    },[])

    const fetchUser = () => {
        axios.get(`http://localhost:3002/users/?email=${match.params.email}`)
                .then((res) => setUser(res.data))
                .catch((err) => console.log(err));
    }




    return(
        <div className="container-xxl">
            <div className="container">
                <div className="text-center mx-auto mb-5 mt-3">
                    <h3 className="text-secondary mb-5">Your Information</h3>
                    <div className="row justify-content-center">
                    <div className="col-lg-8 ">
                            {user.map((u) => {
                                return(
                                    <div className="row">
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>User Email :</h4></div>
                                                <div className="col-md-6"><h4>{u.email}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2 text-secondary fw-bold" >
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>FirstName :</h4></div>
                                                <div className="col-md-6"><h4>{u.first}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>LastName :</h4></div>
                                                <div className="col-md-6"><h4>{u.last}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-8"><h4>MobileNumber :</h4></div>
                                                <div className="col-md-3"><h4>{u.mobile}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12  mb-2 text-secondary fw-bold">
                                            <div className="row border border-2 border-secondary">
                                                <div className="col-md-6"><h4>Location :</h4></div>
                                                <div className="col-md-6"><h4>{u.location}</h4></div>   
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button  className="form-control btn btn-secondary rounded-pill fw-bold"
                                                         onClick={() => history.push("/products")}>
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
        </div>
    )
}

export default ViewUser;