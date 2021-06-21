import React, { useState } from 'react'
import './Login.css';
    
    export default function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(false);
     // let history = useHistory();
    
      const handleSubmit = () => {
        fetch('http://localhost:8084/user-service/api/v1/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
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
                    <a className="navbar-brand" href="#">NewsApp</a>
                    <div className="text-right">
                    {/* <button className="btn btn-outline-success" ></button> */}
                    </div>
                    </div>
            </nav>

        <div className="container">
            <div className="sign-in-card">
               <h2 className="signin-heading">Login</h2>
               <img src="images\login.svg" width="30%" alt=""/>
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
                                <button className="btn btn-success " onClick={handleSubmit}  >login</button>
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
        </div>    
    );
}
