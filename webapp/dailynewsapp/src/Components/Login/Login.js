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
    
  //    return (
        // <div className="container mt-5">
        //   <h2 className="text-primary text-center" id="heading3">
        //     Login
        //   </h2>
        //   <div className="mb-3">
        //     <label htmlFor="email" className="form-label">
        //       Email 
        //     </label>
        //     <input
        //       type="email"
        //       className="form-control"
        //       id="email"
        //       onChange={(e) => setEmail(e.target.value)}
        //     />
          {/* </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
    
          <button */}
        //     type="submit"
        //     id="btnLogin"
        //     className="btn btn-primary"
        //     onClick={handleSubmit}
        //   >
        //     Submit
        //   </button>
        //   <span>
        //     {error ? (
        //       <small className="text-danger text-center d-flex h3">
        //         Invalid credentaial
        //       </small>
        //     ) : (
        //       ''
        //     )}
        //   </span>
        // </div>
     // );
    //}
    



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
                                 <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control"  placeholder="Username"/>
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
