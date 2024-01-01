
import { Redirect } from "react-router-dom";
import { SignConsumer } from "../contextApi/SignContext";


const SignOut = () => {

    return (
        <div>
            <SignConsumer>
                {(contextVal) => (
                    contextVal.setStatus("false"),
                    contextVal.setUser("")
                   
                )}
            </SignConsumer>
            <Redirect to="/"/>
        </div>
    )
}

export default SignOut;