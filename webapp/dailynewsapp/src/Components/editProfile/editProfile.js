import React from 'react';
// import './A';
import { useState,useEffect,useParams } from "react";


export default function EditProfile(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  useEffect(() => {
      fetch(`http://localhost:8084/user-service/api/v1/${email}`)
          .then(res => res.json())
          .then(data => {
              setUsername(data.username)
              setEmail(data.email)
              setPassword(data.password)
          });
  }, [])
  function EditContact() {
      fetch(`http://localhost:8084/user-service/api/v1/${email}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
      }).then(res => {
        if(res.status==200){               
           alert("Edited Succesfully")          
        
          }            else{             
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
    <div className="container my-5">
      <h3 className="text-primary text-center">Edit Profile</h3>
      <div className="container mt-3 mb-3 ">
            <h2><i className="fas fa-user-edit" ></i></h2>
            <div >
               <span>< input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="UserName"  class="fas fa-pencil-alt"/></span><i class="fas fa-pencil-alt"></i><br/><br/>
            </div>
            <div >
            <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" class="fas fa-pencil-alt"/>
            <i class="fas fa-at"></i><br/><br/>
            </div>
            <div>
                < input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" class="fas fa-pencil-alt"/>
                <i class="fas fa-key"></i><br/><br/>
           </div>
            
        </div >
      <br/>
      <button type="submit" className="btn btn-primary" onClick={EditContact}>
        SaveChanges
      </button>
    </div>
  );
}