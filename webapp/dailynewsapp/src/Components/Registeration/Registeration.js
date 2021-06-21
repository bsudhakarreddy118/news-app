import React from 'react';
 import "./Registeration.css";
import { useState } from "react";
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








    // return (
    //     <div className="container my-5">
    //       <h3 className="text-primary text-center">Registration</h3>
    //       <div className="form-group">
            
    //         <input
    //         onChange={(e)=>setUsername(e.target.value)}
    //           type="text"
    //           className="form-control"
    //           id="exampleInputUsername"
    //           aria-describedby="userNameHelp"
    //           placeholder="Enter username"/>
    //       </div>
    //       <div className="form-group">
            
    //         <input
    //          onChange={(e)=>setEmail(e.target.value)}
    //           type="email"
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           placeholder="Email"
    //         />
    //       </div>
    //       <div className="form-group">
            
    //         <input
    //          onChange={(e)=>setPassword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //           id="exampleInputPassword1"
    //           placeholder="Password"
    //         />
    //       </div>
    
    //        <button type="submit" className="btn btn-primary" onClick={handler}>
    //         Submit
    //       </button>
    //     </div>
    //   );
    // }
    


    
    return (

      <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                  <div className="container-fluid">

                  <a className="navbar-brand" href="#">NewsApp</a>

                  <div className="text-right">

                  {/* <button className="btn btn-outline-success" ></button> */}

                  </div>

                  </div>

          </nav>

         <div className="container">

            <div className="sign-in-card">
               <h2 className="signin-heading">Registration</h2>
               <img src="images\Registration.svg" width="30%" alt=""/>
                    <form className="signin-form">
                            <div className="form-group">
                                 <i className="fas fa-user"></i>
                                 <input type="text"  onChange={(e)=>setUsername(e.target.value)} className="form-control"  placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
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
    </div>    
    )
    }
