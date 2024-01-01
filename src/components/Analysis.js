import Chart1 from "./chart1";
import Chart2 from "./chart2";

const Analysis = () => {
    return(
        <div className="container-xxl">
                <div className="container">
                    <div className="text-center mx-auto mb-5 mt-3">
                        <h3 className="text-secondary">Product Analysis</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Chart1/>
                        </div>
                        <div className="col-md-6">
                            <Chart2/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Analysis;