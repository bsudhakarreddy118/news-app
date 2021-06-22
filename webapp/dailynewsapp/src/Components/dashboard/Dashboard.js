import React from 'react'
import { useState,useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";



export default function Dashboard() {

    const [news, setNews] = useState('');
    // const [countriesName, setcountriesName] = useState('');
    const [details,setDetails]= useState([]);

    useEffect(() => {
        fetch(`http://localhost:8084/search-service/api/v1/news`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    function getdetail(){

        // console.log(countriesName,"hi");
       
            fetch(`http://localhost:8084/search-service/api/v1/news`,{
                headers: {
                    'token': `${localStorage.getItem('token')}`
                  }

            })
           
                     .then(res => res.json())
                     .then(data => console.log(data) );

        
    }





    



    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="header">
            <div className="container-fluid ">
                <a href="/" className="navbar-brand">NewsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

              <div style={{paddingLeft:400}}>

              <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="/EditProfile" className="nav-link dropdown-item">EditProfile</Link>
        <Link to="/logout" className="nav-link dropdown-item">Logout</Link>
    
  </div>
  
</div>




                        



                </div> 


                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <div style={{paddingRight:400}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <form className="d-flex" action="#">
              {/* <input
                // className="form-control me-2"
                // value={inputValue}
                // ref={inputRef}
                // onChange={(e) => setInputValue(inputRef.current.value)}
                value={countriesName}
                 onChange={(e) => setcountriesName(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              <button
                className="btn btn-outline-success"
                type="button"
               onClick={getdetail}
              >
                Search
              </button>
            </form>
                    </ul>

                </div>
            </div>
        </nav>
           
         
         <section>
                {
                    details.map(item => <Card  title={item.title} Poster={item.urlToImage} author={item.author} description={item.description} />)

                }

            
               
 
            </section>
        </div>

    )
}
