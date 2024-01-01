import { lazy, Suspense, useState } from "react"
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import "./Navbar.css";
import SignIn from "./SingIn";
import About from "./About";
import SignOut from "./SignOut";
import Register from "./Register";
import NotFound from "./NotFound";
import AllProducts from "./AllProducts";
import { SignConsumer } from "../contextApi/SignContext";

const AddProduct = lazy(() => import("./AddProduct")) ;
const ProductDetail = lazy(() => import("./ProductDetail"));
const Edit = lazy(() => import("./Edit"));
const Delete = lazy(() => import("./Delete"));
const PassReset = lazy(() => import("./PassReset"));
const Analysis = lazy(() => import("./Analysis"));
const ViewUser = lazy(() => import("./ViewUser"));
const EditUser = lazy(() => import("./EditUser"));

const Navbar = () => {

   
    const [showNavbar,setShowNavbar] = useState(false)
    const [show,setShow] = useState(false)

    const showMenu = () => {
      setShowNavbar(!showNavbar);
    }

    const toggle = () => {
      setShow(!show);
    }

    return (
        <BrowserRouter>
          
          <nav className="navbar bg-secondary">
          <div className="container">
            <div className="menu-icon" onClick={showMenu}>
                <button className="btn btn-secondary rounded-pill fw-bold">Menu</button>
            </div>
            <div></div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li >
              <NavLink onClick={showMenu} to = "/">About</NavLink>
              </li>
              <li >
              <NavLink onClick={showMenu}  to = "/products">Products</NavLink>
              </li>
              <SignConsumer>
                {(contextVal) => (
                  <>
              { contextVal.status === "true" ? (
                <li className="nav-item dropdown">
                  <button className="dropdown-toggle text-white bg-secondary Name"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          id="navbarDropdown"
                          onClick={() => toggle()}
                          
                    >
                    
                    {contextVal.first}
          
                  </button>
                  {show ? (
                    <ul className="dropdown-menu bg-secondary"
                        aria-labelledby="navbarDropdown">
                     
                          <li>
                              <NavLink to={`/viewUser/${contextVal.user}`} onClick={toggle} className="dropdown-item">View</NavLink>
                          </li>
                          <li>
                            
                              <NavLink to={`/editUser/${contextVal.user}`} onClick={toggle} className="dropdown-item">Edit</NavLink>
                            
                          </li>
                          <li>
                            
                              <NavLink to="/signout" onClick={toggle} className="dropdown-item">Signout</NavLink>
                            
                          </li>
                    </ul>
                    ) : null}
                  </li>
              ) : (
                <li>
                      <NavLink onClick={showMenu}   to="/signin" >
                        SignIn
                      </NavLink>
                </li>
              )
              }

              <li>
                <NavLink onClick={showMenu}  to = "/register">Register</NavLink>
              </li>
              </>
              )}
              
              </SignConsumer>
            </ul>
            </div>
            <div></div>
        
            </div>
          </nav>
           
          <Suspense  fallback={
                      <div className="center spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      }>
            <Switch>
              <Route exact  path = "/" component={About}/>
              <Route exact path = "/products"  component={AllProducts}/>
              <Route exact path = "/viewUser/:email"  component={ViewUser}/>
              <Route exact path = "/editUser/:email"  component={EditUser}/>
              <Route exact path = "/passreset"  component={PassReset}/>
              <Route exact path = "/products/addProduct"  component={AddProduct}/>
              <Route exact path = "/products/editProduct"  component={Edit}/>
              <Route exact path = "/analysis"  component={Analysis}/>
              <Route exact path = "/products/details/:productName"  component={ProductDetail}/>
              <Route exact path = "/products/edit/:productName"  component={Edit}/>
              <Route exact path = "/products/delete/:productName"  component={Delete}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signout" component={SignOut}/>
              <Route exact path="/register" component={Register}/>
              <Route component={NotFound}/>
             
            </Switch>
          </Suspense>
      </BrowserRouter>
     
      
    )
}

export default Navbar;



/* <nav className="navbar navbar-expand-lg sticky-top bg-secondary fadeIn">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <NavLink className="navbar-brand nav-link fw-bold text-light" to = "/">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="navbar-brand nav-link fw-bold text-light" to = "/products">Products</NavLink>
              </li>
              { cond ? (
                <li className="nav-item">
                  <NavLink className="navbar-brand nav-link fw-bold text-light" to="/signout" >
                    SignOut
                  </NavLink>
                  </li>
              ) : (
                <li className="nav-item">
                      <NavLink className="navbar-brand nav-link fw-bold text-light" to="/signin" >
                        SignIn
                      </NavLink>
                </li>
              )
              }
              <li className="nav-item">
                <NavLink className="navbar-brand nav-link fw-bold text-light" to = "/register">Register</NavLink>
              </li>
            </ul>
           
            </div>
        </nav>      */