import React from "react";

export const SignContext = React.createContext();

export class SignProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : "",
            first : "",
            status : "false",
            checkedArray : []
        }
    }

    render() {
        return(
            <SignContext.Provider value={{
                ...this.state,
                setUser : (email) => this.setState({user:email}),
                setFirst : (name) => this.setState({first:name}),
                setStatus : (status) => this.setState({status : status}),
                setChecked : (value) => this.setState({checkedArray : [...this.state.checkedArray,value]}),
                filterChecked : (value) => this.setState({checkedArray : this.state.checkedArray.filter((e) => e !== value)}),
                copyArray : (arr) => this.setState({checkedArray : arr})
            }}> 
                {this.props.children}
            </SignContext.Provider>

        )
    }
}

export const SignConsumer = SignContext.Consumer;