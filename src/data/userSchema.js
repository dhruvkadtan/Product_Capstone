import * as Yup from "yup";

const userSchema = Yup.object().shape({
    email : Yup.string().email("Invalid User ID")
                .required("User Id is required"),
    
    password : Yup.string().min(3,"Password must be minimum of 3 characters")
                .required("Password is required"),

    first : Yup.string().required("First name is required"),

    last : Yup.string().required("Last name is required"),
    
    location : Yup.string().required("Location is required"),

    mobile : Yup.number().required("Mobile Number is required")
                        
})          

export default userSchema;