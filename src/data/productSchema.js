import * as Yup from "yup";

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

export default productSchema;