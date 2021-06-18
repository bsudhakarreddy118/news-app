/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a data-testid="brandname" className="navbar-brand" href="#">News Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Catagory
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Entertainment</button></li>
                            <li><button class="dropdown-item" type="button">Politics</button></li>
                            <li><button class="dropdown-item" type="button">Sports</button></li>
                            <li><button class="dropdown-item" type="button">Science</button></li>
                            <li><button class="dropdown-item" type="button">Business</button></li>
                            <li><button class="dropdown-item" type="button">Technology</button></li>
                            <li><button class="dropdown-item" type="button">Others</button></li>
                        </ul>
                            <li className="nav-item">
                                <a className="nav-link" href="">Dashboard</a>
                            </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Register</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="">EditProfile</a>
                            </li> */}
                        
                            <div class="input-group">
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                                <button type="button" class="btn btn-outline-success">search</button>
                            </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
 
}
