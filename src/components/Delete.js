import axios from "axios"
import React from "react"
import { Redirect, Route } from "react-router-dom";

const delet = async(id) => {
    
   await (await axios.delete(`http://localhost:3001/products/${id}`))
    .catch((err) => console.log(err));

}

class Delete extends React.Component{

    constructor(props){
        super();
        
        if(window.confirm("Are you sure want to delete?")) {
            
                delet(props.location.state.id);
          
        }

       
    }
    componentWillUnmount() {
     
    }
    render() {
    return(
        <div>
            <Route>
                <Redirect to="/products"/>
            </Route>
        </div>
    )
    }
}

export default Delete;