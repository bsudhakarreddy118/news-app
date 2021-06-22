import React from 'react';
 import "./Registeration.css";
import { useState} from "react";
import { Link } from "react-router-dom";
export default function Registeration() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


function handler(){
  
fetch('http://localhost:8084/user-service/api/v1/register', {      
        method: 'POST',            
  headers: {                
    'Content-Type': 'application/json'          
    },           
   body: JSON.stringify({ username,email,password })       
 }).then(res =>{            
  if(res.status==200){               
     alert("Registered Succesfully")          
  
    }            else{             
       alert("Unsuceessfull")          
    }        });




}








    

    
    return (

      
<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                  <div className="container-fluid">

                  
                  <Link to="/newsApp" className="nav-link"><h2>NewsApp</h2></Link>

                  <div className="text-right">

                  {/* <button className="btn btn-outline-success" ></button> */}
                  <div className="container-fluid">

                  
                  <Link to="/reglogin" className="nav-link"><h2>Login</h2></Link>

                  <div className="text-left"></div>

                  </div>
                  </div>

                  </div>

          </nav>
          <section className="reglog">
            <container>

         <div>

            <div className="sign-in-card">
               <h2 className="signin-heading">Registration</h2>
              
                    <form className="signin-form">
                            <div className="form-group">
                                 <i className="fas fa-user"></i>
                                 <input type="text"  onChange={(e)=>setUsername(e.target.value)} className="form-control"  placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="password"  onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="Password"/>
                            </div>
                            <div className="text-center"  >
                                <button className="btn btn-success" onClick={handler}>Register</button>
                         </div>
                    </form>
             </div>
             
        </div>
        
</container>
    </section>
    <div data-testid="footdiv" className="footer">
    <span><h4>News Manager &copy; 2021 </h4></span>
    </div>
    </div>    
    )
    }
