
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Bar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);



const Chart1 = () => {
    const [product,setProduct] = useState([]);
    const [price,setPrice] = useState([]);

    const implement = () => {
        axios.get(`http://localhost:3001/products`).then((res) => {
            const productData = res.data;
            
            let productName = [];
            let productPriceData = [];
            
            productData.forEach((e) => {
                productName.push(e.productName);
                productPriceData.push(e.price);
            })
            
            setProduct(productName)
            setPrice(productPriceData)
        })

    }

    useEffect(() => {
        implement();
    },[])

    const data = {
        labels: product,
        datasets: [
          {
            label: "Products Prices",
            data: price,
            fill: true,
            backgroundColor: "orange",
          },
        ],
      };
    
    return (
      <Fade bottom>
      <hr />
      <Bar data={data}/>
      <h6 className="text-center mt-1 Playfair">Product Prices</h6>
      <hr />
    </Fade>
    )
}

export default Chart1;  