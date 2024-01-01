import "../App.css";
import carousel1 from "../Images/carousel1.jpg";
import analysis from "../Images/analysis.jpg";
import products from "../Images/products.jpg";
import signin from "../Images/signin.jpg";

const About = () => {
    return(
        
        <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel">
          <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
            <div className="carousel-inner">
                <div className="carousel-item active "> 
                <img
                    src={carousel1}
                    className="d-block  w-100"
                    alt="..."
                    style={{ filter: " blur(1px)" }}
                    />
                
                <div className="carousel-caption d-none d-md-block ">
                    <h3 className="text-white fw-bold">Welcome to D-Systems</h3>
                    <h4 className="text-white fw-bold">Accounting and Inventory Software</h4>
                        <h5>We provide a managing platform for businesses</h5>
                        <h5>   Here, we can account the stock products</h5>
                        <h5>    and also maintain daily transactions.</h5>
                </div>
                </div>
                <div className="carousel-item"> 
                <img
                    src={products}
                    className="d-block w-100"
                    alt="..."
            
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Product Details Can be viewed without Sign in</h5>
                    </div>
                </div>
                <div className="carousel-item"> 
                <img
                    src={signin}
                    className="d-block w-100"
                    alt="..."
                    
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>To add, edit, delete Please SignIn first</h5>
                    </div>
                </div>
                <div className="carousel-item"> 
                <img
                    src={analysis}
                    className="d-block w-100"
                    alt="..."
                    
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Products views and price analysis can be done through analysis</h5>
                    </div>
                </div>
                
               
            </div>
          
    </div>
    )
}

export default About;

/* <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active "> 
                        <img
                            src={carousel1}
                            className="d-block  w-100"
                            alt="..."
                            style={{ filter: " blur(1px)" }}
                            />
                        </div>
                        <div className="carousel-caption d-none d-md-block ">
                            <h3 className="text-white fw-bold">Welcome to D-Systems</h3>
                            <h4 className="text-white fw-bold">Accounting and Inventory Software</h4>
                        </div>
                        <div className="carousel-item"> 
                        <img
                            src={carousel1}
                            className="d-block w-100"
                            alt="..."
                            style={{ filter: " blur(1px)" }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h4>We provide a managing platform for businesses</h4>
                                <h4>   Here, we can account the stock products</h4>
                                <h4>    and also maintain daily transactions.</h4>
                            </div>
                        </div>
                       
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                     </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
    */