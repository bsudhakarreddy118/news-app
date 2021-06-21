/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
    const [title, setTitle] = useState("");
  const [checkPre, setcheckPre] = useState(true);
  const [placeholder, setplaceholder] = useState("Enter movie name");
  function check(data) {
    if (data.length === 0) {
      setplaceholder("Please enter the movie");

      setcheckPre(true);
    } else {
      setTitle(data);
      setcheckPre(false);
    }
  }
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">
        //         <a data-testid="brandname" className="navbar-brand" href="#">News Portal</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        //                     Catagory
        //                 </button>
        //                 <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        //                     <li><button class="dropdown-item" type="button">Entertainment</button></li>
        //                     <li><button class="dropdown-item" type="button">Politics</button></li>
        //                     <li><button class="dropdown-item" type="button">Sports</button></li>
        //                     <li><button class="dropdown-item" type="button">Science</button></li>
        //                     <li><button class="dropdown-item" type="button">Business</button></li>
        //                     <li><button class="dropdown-item" type="button">Technology</button></li>
        //                     <li><button class="dropdown-item" type="button">Others</button></li>
        //                 </ul>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="">Dashboard</a>
        //                     </li>
        //             </ul>
        //             <ul className="navbar-nav ml-auto">
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="">Login</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="">Register</a>
        //                     </li>
        //                     {/* <li className="nav-item">
        //                         <a className="nav-link" href="">EditProfile</a>
        //                     </li> */}
                        
        //                     <div class="input-group">
        //                         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
        //                         <button type="button" class="btn btn-outline-success">search</button>
        //                     </div>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            width="50px"
            height="40px"
          />
          <h5 className="text-white d-inline mx-2">Movie Cruiser</h5>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item d-inline">
              <Link to="/" className="btn nav-link">
                <button className="btn nav-link d-inline" aria-current="page">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              {props.loggedStatus ? (
                <Link to="/favourite" className="btn nav-link">
                  <button className="btn nav-link d-inline" aria-current="page">
                    Favourite
                  </button>
                </Link>
              ) : null}
            </li>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder={placeholder}
                onChange={(e) => check(e.target.value)}
                aria-label="Search"
              />

              {checkPre ? (
                <Link to="/">
                  <button
                    id="search"
                    className="btn btn-outline-success"
                    type="submit"
                    style={{marginTop:'10px'}}
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </Link>
              ) : (
                <Link to={`/Search/${title}`}>
                  <button id="search"
                    className="btn btn-outline-success" type="submit" style={{marginTop:'10px'}}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </Link>
              )}
            </form>
          </ul>

          <ul className="navbar-nav ml-auto mb-lg-0">
          <li className="nav-item">
            {console.log(props.loggedStatus)}
            {props.loggedStatus ? (
              <button className="btn nav-link d-inline" aria-current="page">
              <Link to="/logout" type="button" className="btn btn-light">
                
                  Logout
              
              </Link>
              </button>
            ) : (
              <button className="btn nav-link d-inline" aria-current="page">
              <Link to="/login" type="button" className="btn btn-light">
                
                  Login
                
              </Link>
              </button>
            )}
          </li>
          </ul>
        </div>
      </div>
    </nav>
    )
 
}
