import React from 'react';
import "./Registration.css";

export default function Registration() {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // function Registration() {
    //     fetch('http://localhost:3001/auth/v1', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ username, password })
    //     }).then(res => res.json())
    //         .then(data => localStorage.setItem('token', data.token));
    // }
    return (

    <div>
         
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">NewsApp</a>
                    <div className="text-right">
                    <button className="btn btn-outline-success" >Login</button>
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
                                 <input type="text"  className="form-control"  placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="email"  className="form-control" placeholder="email"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="password"  className="form-control" placeholder="Password"/>
                            </div>
                            <div className="text-center"  >
                                <button className="btn btn-success ">Register</button>
                         </div>
                    </form>
             </div>
        </div>
    </div>    
    )
}
