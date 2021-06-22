import React from 'react'
import './Landing.css';
import { Link } from "react-router-dom";

export default function Landing() {
    return (
       
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="header">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">NewsApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        
                            <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            
               
             
                <section>
                     
                <container>
                <h5 class="text-uppercase">Daily</h5>
                <h1 class="text-uppercase">NewsApp</h1>		
                </container>
                </section>
                <div data-testid="footdiv" className="footer">
                    <span><h4>News Manager &copy; 2021 </h4></span>
                </div>
                </div>




        
    )
}

