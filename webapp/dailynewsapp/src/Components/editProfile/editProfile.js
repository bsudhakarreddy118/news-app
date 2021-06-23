import React from 'react';
import { Link } from "react-router-dom";
import { useState,useEffect,useParams } from "react";


export default function EditProfile(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  let emailId=localStorage.getItem('email');
  useEffect(() => {
  
     console.log(emailId);
     setEmail(emailId)
 
}, [])

  // useEffect(() => {
  //     fetch(`http://localhost:8084/user-service/api/v1/${email}`)
  //         .then(res => res.json())
  //         .then(data => {
  //             setUsername(data.username)
  //             setEmail(data.email)
  //             setPassword(data.password)
  //         });
  // }, [])
  // function EditContact() {
  //     fetch(`http://localhost:8084/user-service/api/v1/${emailId}`, {
  //         method: 'PUT',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ username, email, password })
  //     }).then(res => {
  //       console.log(res);
  //       if(res.status==200){   
          
  //                     
  //         //  alert("Edited Succesfully")          
        
  //         }            else{             
  //         //    alert("USER NOT FOUND")          
  //         } 
          
  //     });
  // }

  function EditContact() {
    fetch(`http://localhost:8084/user-service/api/v1/${emailId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username,email, password })
    }).then(res => {
        console.log(res)
      if(res.status==200){  
          
                    
        alert("Edited Succesfully")          
      
        }            else{             
         alert("USER NOT FOUND")          
        } 
        
    });
  }



  




  

  // const [username, setUsername] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');


// function handler(){
  
// fetch(`http://localhost:8084/user-service/api/v1/${email}`, {      
//         method: 'PUT',            
//   headers: {                
//     'Content-Type': 'application/json'          
//     },           
//    body: JSON.stringify({ username,email,password })       
//  }).then(res =>{            
//   if(res.status==200){             
//      alert("Registered Succesfully")          
  
//     }            else{             
//        alert("Unsuceessfull")          
//     }        });




// }

  return (


  

  <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link to="/newsApp" className="nav-link"><h2>DailyNews</h2></Link>
                    <div className="text-right">
                    {/* <button className="btn btn-outline-success" ></button> */}
          {/* <Link to="/dashboard"><Button style={myStyle}><p>Click Me!</p></Button>
</Link> */}            <Link to="/newsApp" className="nav-link">logout</Link>
                    <div className="text-left"></div>
                    </div>
                    </div>
            </nav>
            <section className="log">
<container>
        <div>
            <div className="sign-in-card">
               <h2 className="signin-heading">EditProfile</h2>
                    <form className="signin-form">
                            <div className="form-group">
                                 <i className="fas fa-email"></i>
                                 <input type="username" onChange={(e)=>setUsername(e.target.value)} className="form-control" value={username}  placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input disabled type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" value={email} placeholder="Email"/>
                            </div>

                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" value={password} placeholder="Password"/>
                            </div>
                            <div className="text-center"  >
                             {/* <button  className="btn btn-success " type="button" onClick={EditContact}  >SaveChanges</button> */}
                          
                                 <Link to="/profile" className="btn btn-success" onClick={EditContact} >SaveChanges</Link>
                                              
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
    );
}