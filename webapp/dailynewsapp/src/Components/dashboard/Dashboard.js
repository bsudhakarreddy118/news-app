import React from 'react'
import { useState } from "react";
import './Dashboard.css';




export default function Dashboard() {

    const [countriesName, setCountriesName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [details,setDetails]= useState([]);

    function getdetail(){
       
            fetch(`http://localhost:8084/search-service/api/v1/${countriesName}/${categoryName}`,{
            //     headers: {
            //     'token': `${localStorage.getItem('token')}`
            //   }

    
            })
                     .then(res => res.json())
                    //  .then(data=> {
                    //      console.log(data.map())
                    //  })
                   .then(data => setDetails(data.articles))

    }




     console.log(details);


    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark conn" id="header">
            <div className="container-fluid ">
                <a href="/" className="navbar-brand">NewsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{paddingLeft:400}}>



            <select onChange={(e) => setCategoryName(e.target.value)} >
                            <option>Select Category</option>
                            <option>business</option>
                            <option>sport</option>
                            <option>politics</option>
                            <option>entertainment</option>
                        </select>

                </div>
                <div style={{paddingRight:400}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <form className="d-flex" action="#">
              <input

                 onChange={(e) => setCountriesName(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
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
                <div className="btn-group">
                <button type="button" className="btn btn-dark dropdown-toggle con" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </button>
                {/* <button type="button" className="btn btn-dark  con" daria-expanded="false">
                   Favourite
                </button> */}
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
            </div>
        </nav>
           
         
            <section >
            <div className="row">
                    {
                        details.map(item => (  
                        
                        <div className="col-md-3">
                        
                                <div className="card">
                                    
                                    {/* <img src={`https://tse2.mm.bing.net/th/id/OIP.zVKdiMLwKrwhSjWvVe3IxQHaE7?pid=ImgDet&rs=1`} className="card-img-top" alt="..."/> */}
                                    <img src={`${item.urlToImage}`} className="card-img-top" alt="..."/>

                                    <div className="card-body bg-gray">
                                        {/* <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteContactHandler.bind(this, props.id)}></i> */}
                                        {/* <Link to={`/edit/${props.id}`}><i className="fas fa-pencil-alt fa-lg float-end text-primary px-2"></i></Link> */}
                                        
                                        
                                        <p className="card-text" value={item.author}>Author :{item.author}</p>
                                        
                                        <p className="card-title" value={item.title}>Title :{item.title}</p>
                                        
                                        <p className="card-text" value={item.description}>Description:{item.description}</p>

                                        {/* <p className="card-text" value={item.url}>url :{item.url}</p> */}

                                        {/* <p className="card-text" value={item.urlToImage}>urlToImage :{item.urlToImage}</p> */}

                                        <p className="card-text" value={item.publishedAt}>publishedAt :{item.publishedAt}</p>

                                        <p className="card-text" value={item.content}>content :{item.content}</p>



                                    </div>
                                    <div className="card-footer bg-transparent border-success"><a href="/">Add to favourite</a></div>
                                </div>
                            </div>
                            
                         
                        ))
                    }
                    </div>

                   
 
            </section>
            <div data-testid="footdiv" className="footer">
                    <span><h4>News Manager &copy; 2021 </h4></span>
            </div>
        </div>

    )
}
