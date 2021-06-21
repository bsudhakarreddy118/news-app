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
  if(res.status===200){               
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
          <section>
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
// const [username, setusername] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
  
 
//   const [visibleLoginError, setvisibleLoginError] = useState(false);
//   const [submit, setsubmit] = useState(false);
//   // const history = useHistory();

//   useEffect(() => {
//     if (
//       username !== "" &&
//       email !== "" &&
//       password !== "" 
      
//     ) {
//       setsubmit(true);
//       document.getElementById("errorForm").innerHTML = "";
//     } else {
//       setsubmit(false);
//       document.getElementById("errorForm").innerHTML = "";
//     }
//   }, [username, email, password, visibleLoginError]);

  

//   function check() {
    

//     fetch("http://localhost:8084/user-service/api/v1/register", {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({username,email,password}),
//     })
//       .then((res) => {
//         console.log(res);
//         if (!res.ok) {
//           res.text().then((text) => {
//             console.log(text);
//             console.log("text");
//             setvisibleLoginError(true);
//             loginError(text);
//             return null;
//           });
//         } else {
//           console.log("else");
//           return res.json();
//         }
//       })
//       .then((data) => {
//         setTimeout(() => {
//           console.log("data"+data);
//         console.log("hell");
//         setvisibleLoginError(false);
//         // history.push("/login");
//         }, 1000);
//       })
//       .catch((error) => console.log(error.status));
//   }

//   function loginError(text) {
//     document.getElementById("loginErrorText").innerHTML = text;
//   }
//   function usernameValidation(data) {
//     if (data === "") {
//       document.getElementById("errorusername").innerHTML =
//         "User username field should not be empty.";
//       setusername("");
//     } else if (!data.match("^([a-zA-Z]+(\\s[a-zA-Z]+)?)$")) {
//       document.getElementById("errorusername").innerHTML =
//         "User username can only contain alphabets.<br > A space is allowed between first username and last username.";
//       setusername("");
//     } else {
//       document.getElementById("errorusername").innerHTML = "";
//       setusername(data);
//     }
//   }
//   function emailValidation(data) {
//     if (data === "") {
//       document.getElementById("errorEmail").innerHTML =
//         "Email field should not be empty.";
//       setemail("");
//     } else if (!data.match("^[a-zA-Z0-9._%+-]+[a-zA-Z]+@[a-zA-Z]{3,}.(com|in|org)$")) {
//       document.getElementById("errorEmail").innerHTML = "Email is not correct.";
//       setemail("");
//     } else {
//       document.getElementById("errorEmail").innerHTML = "";
//       setemail(data);
//     }
//   }
//   function passValidation(data) {
//     if (data !== "" && data.length < 5) {
//       document.getElementById("strongability").innerHTML = "Weak password...";
//       document.getElementById("strongability").style.color = "red";
//     } else if (data !== "" && data.length < 9) {
//       document.getElementById("strongability").innerHTML = "Medium password...";
//       document.getElementById("strongability").style.color = "darkblue";
//     } else if (data !== "" && data.length > 8) {
//       document.getElementById("strongability").innerHTML = "Strong password...";
//       document.getElementById("strongability").style.color = "lightgreen";
//     } else {
//       document.getElementById("strongability").innerHTML = "";
//     }

//     if (data === "") {
//       document.getElementById("errorPass").innerHTML =
//         "Password field should not be empty.";
//     } else if (!data.match("(?=.*[A-Z])(?=.*[0-9])(?=.*[\\W])")) {
//       document.getElementById("errorPass").innerHTML =
//         "At least one capital letter should be there.<br>At least one number should be there.<br>At least one special character should be there.";
//     } else {
//       document.getElementById("errorPass").innerHTML = "";
//       setpassword(data);
//     }

    
//   }

  

//   function formInvalid() {
//     document.getElementById("errorForm").innerHTML = "Form is incomplete.";
//   }

//   function closeLoginError() {
//     document.getElementById("loginError").innerHTML = "";
//     setvisibleLoginError(false)
//   }
//   return (
//     <div
//       id="formContainer"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/image/registerBackground.jpg)`,
//       }}
//     >
//       <form id="form" className="rounded shadow" action="#" method="POST">
//         <fieldset>
//           <h1
//             className="fw-bold fs-4"
//             style={{
//               color: "white",
//               fontFamily: "Barlow Condensed, sans-serif",
//             }}
//           >
//             Registration Form
//           </h1>

//           {visibleLoginError && (
//             <div
//               id="loginError"
//               className="bg-danger mx-5 text-white p-2 rounded"
//             >
//               <div className="d-flex justify-content-between">
//                 <div id="loginErrorText"></div>
//                 <button
//                   type="button"
//                   onClick={closeLoginError}
//                   className="btn-close"
//                   data-bs-dismiss="custom"
//                   aria-label="Close"
//                 ></button>
//               </div>
//             </div>
//           )}
//           <div id="fullusername">
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => usernameValidation(e.target.value)}
//               username="fusername"
//               id="username"
//               placeholder="Enter username"
//               required
//             />
//             <div style={{ textAlign: "left", marginTop: "-10px" }}>
//               <p className="text-danger mx-2" id="errorusername"></p>
//             </div>
//           </div>

//           <div id="otherInputs">
//             <input
//               type="email"
//               className="form-control"
//               onChange={(e) => emailValidation(e.target.value)}
//               username="email"
//               id="email"
//               placeholder="Enter Email Address"
//               required
//             />
//             <div style={{ textAlign: "left", marginTop: "-10px" }}>
//               <p className="text-danger mx-2" id="errorEmail"></p>
//             </div>

//             <input
//               type="password"
//               className="form-control"
//               onChange={(e) => passValidation(e.target.value)}
//               username="password"
//               id="password"
//               placeholder=" Enter Password"
//               required
//             />
//             <div style={{ textAlign: "left", marginTop: "-10px" }}>
//               <p className="mx-2" id="strongability"></p>
//             </div>
//             <div style={{ textAlign: "left", marginTop: "-12px" }}>
//               <p className="text-danger mx-2" id="errorPass"></p>
//             </div>

           
            
            
            
            
           
//           </div>

//           <div>
//             <p className="mx-2 text-danger" id="errorForm"></p>
//           </div>

//           {submit ? (
//             <div className="btn" username="submit" onClick={check} id="submit">
//               Submit
//             </div>
//           ) : (
//             <div className="btn" id="submit" onClick={formInvalid}>
//               Submit
//             </div>
//           )}
//         </fieldset>
//       </form>
//     </div>
//   );
// }

