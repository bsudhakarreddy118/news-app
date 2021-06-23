import React from 'react'
import './Landing.css';
import { Link } from "react-router-dom";

import {useEffect,useState} from 'react'

export default function Landing() {



    const [content, setContent] = useState([]);
    useEffect(() => {
       fetch('')
       .then(res=>res.json())
       .then(data=>{
            setContent(data);
       });
    }, [])
//     return (
//         <div>
//             <div  className="container mt-3">
//                 <div  className="row">
//                     {
//                         content.map((country, i) =>
//                             <CountryCard key={i}
//                                 flag={country.countryInfo.flag}
//                                 country={country.country}
//                                 cases={country.cases}
//                                 active={country.active}
//                                 deaths={country.deaths} />
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
    return (
       
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="header">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">DailyNews</a>
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
            
            
               
             
                <section className="landing">
                    
                     
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

