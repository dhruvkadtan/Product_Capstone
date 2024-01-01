
import axios from "axios";
import { useEffect,useState } from "react";
import { Line } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


const Chart2 = () => {
    const [product,setProduct] = useState([]);
    const [counts,setCounts] = useState([]);

    const implement = () => {
        axios.get(`http://localhost:3001/products`).then((res) => {
            const productData = res.data;
            
            let productName = [];
            let productCountData = [];
            
            productData.forEach((e) => {
                productName.push(e.productName);
                productCountData.push(e.count)
            })
            
            setProduct(productName)
            setCounts(productCountData)
        })

    }

    useEffect(() => {
        implement();
    },[])

    const data = {
        labels: product,
        datasets: [
          {
            label: "Top Viewed Products",
            data: counts,
          },
        ],
      };
    
    return (
      <Fade bottom>
      <hr />
      <Line data={data}/>
      <h6 className="text-center mt-1 Playfair">Top Viewed Product</h6>
      <hr />
    </Fade>
    )
}

export default Chart2;