import React, { useState } from 'react'
import './Login.css';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function Login() {
        fetch('http://localhost:3001/auth/v1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(data => localStorage.setItem('token', data.token));
    }
    return (

        <div className="container">
            <div className="sign-in-card">
               <h2 className="signin-heading">Login</h2>
               <img src="images\login.svg" width="30%" alt=""/>
                    <form className="signin-form">
                            <div className="form-group">
                                 <i className="fas fa-user"></i>
                                 <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control"  placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-key"></i>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                            </div>
                            <div className="text-center"  >
                                <button className="btn btn-success ">signup</button>
                         </div>
                    </form>
             </div>
        </div>
    )
}
