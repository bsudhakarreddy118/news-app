import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Dashboard.css';
import { Link } from "react-router-dom";




export default function Dashboard() {



const [countriesName, setCountriesName] = useState('');
   const [categoryName, setCategoryName] = useState('');
   const [details,setDetails]= useState([]);
 
    function getdetail(){
        let token = localStorage.getItem('token');
       
            fetch(`http://localhost:8084/search-service/api/v1/${countriesName}/${categoryName}`,{

            })
            .then(res => res.json())
           .then(data => setDetails(data.articles))

}
function addFav(item) {
    let emailid=localStorage.getItem('email');

    var pushingObj={}
    var sendObj={}
    let id1=uuidv4();
    pushingObj.favoriteId=id1
    pushingObj.title=item.title
    pushingObj.author=item.author
    pushingObj.url=item.url
    pushingObj.urlToImage=item.urlToImage
    pushingObj.publishedAt=item.publishedAt
    pushingObj.description=item.description
    pushingObj.content=item.content
console.log(pushingObj);
    let NewsItem=[];
    
    NewsItem.push(pushingObj)

    // sendObj.userEmail=emailid
    // sendObj.foodItems=foodItem

    let email=emailid
    let news=NewsItem

    let token1 = localStorage.getItem('token');

    fetch('http://localhost:8084/favorite-service/api/v1/addnews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
                'token': token1
         

        },
        // body: JSON.stringify({sendObj})
        body: JSON.stringify({email,news})
    }).then(res => {

        if(res.status==200){
            alert("added succesfully")
        }
        else{
            alert("Error in adding")
        }
        
    });

console.log(sendObj);




}
    
console.log(details);
 
return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="header">
        <div className="container-fluid ">
            <a href="/" className="navbar-brand">DailyNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div style={{paddingLeft:300}}>



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
        >            Search
         </button>
       </form>
               </ul>

           </div>
               
                 
                   <div className="dropdown con">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fas fa-user-cog"></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><Link to="/" className="dropdown-item conn">Logout</Link></li>
                                    <li><Link to="/edit" className="dropdown-item conn">EditProfile</Link></li>
                                    <li><Link to="/favourite" className="dropdown-item conn">Favorite</Link></li>
  </ul>
</div>                 
                               
 
            </div>
        </nav>
           
        <div className="container">
            <section>
            
            <div className="row">
                    {
                        details.map(item => (  
                        
                        <div className="col-md-3">
                        
                                <div className="card">
                                    
                                    {/* <img src={`https://tse2.mm.bing.net/th/id/OIP.zVKdiMLwKrwhSjWvVe3IxQHaE7?pid=ImgDet&rs=1`} class="card-img-top" alt="..."/> */}
                                    <img src={`${item.urlToImage}`} className="card-img-top" alt="..."/>
 
                                    <div className="card-body">
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
                                    <div className="card-footer bg-transparent border-success"><a href="#" onClick={addFav.bind(this,item)}>Add to favourite</a></div>
                                </div>
                            </div>
                            
                         
                        ))
                    }
                    </div>
                   
               
            </section>
            </div>
            <div data-testid="footdiv" className="footer">                 
              <span><h4>News Manager &copy; 2021 </h4></span>
          </div>
            
        </div>
 
    )
}
