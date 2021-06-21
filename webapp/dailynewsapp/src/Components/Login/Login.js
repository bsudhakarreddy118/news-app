import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";
    
    export default function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(false);
     // let history = useHistory();
    
      const handleSubmit = () => {
        fetch('http://localhost:8084/user-service/api/v1/login', {
          method: 'POST',
          headers: {
            // Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('email', email);
              setError(false);
             // setIsAuthenticated(true);
            //  history.push('/');
            } else {
              setError(true);
            }
          });
        console.log(email, password);
      };

     return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link to="/newsApp" className="nav-link"><h2>NewsApp</h2></Link>
                    <div className="text-right">
                    {/* <button className="btn btn-outline-success" ></button> */}
                    </div>
                    </div>
            </nav>
            <section>
<container>
        <div>
            <div className="sign-in-card">
               <h2 className="signin-heading">Login</h2>
                    <form className="signin-form">
                            <div className="form-group">
                                 <i className="fas fa-email"></i>
                                 <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control"  placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                            </div>
                            <div className="text-center"  >
                                <button className="btn btn-success " type="button" onClick={handleSubmit}  >login</button>
                         </div>
                            <span>
                            {error ? (
                            <small className="text-danger text-center d-flex h3">
                                Invalid credentaial
                            </small>
                            ) : (
                            ''
                            )}
                            </span>
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
