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
                                <a href="/" className="nav-link">Home</a>
                            </li>
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
                     <div>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFfWqnXMy5bdYq5zuu_GyCliztWhdmkz5N9N9XZzgfjQXMSeOJPgvlfknAjYryibUJP4&usqp=CAU" className="img-rounded" alt="harryNews"></img>
    </div>
    <div>

<img src="https://t3y4b2m7.rocketcdn.me/wp-content/uploads/2013/09/Top-Stories-Bing-News-2.png" className="imm1" alt="harryNews"></img>
    </div>
    <div className="block1">
      <h2>Series</h2></div>

    <div className="block2">
      <h2>news</h2>
    </div>
                <container>
                <h5 class="text-uppercase">Daily</h5>
                <h1 class="text-uppercase">NewsApp</h1>		
                </container>
                </section>
                </div>
        
    )
}

