import React from 'react';
export default function EditProfile() {
  return (
    <div className="container my-5">
      <h3 className="text-primary text-center">Edit Profile</h3>
      <div className="container mt-3 mb-3 ">
            <h2><i className="fas fa-user-edit" ></i></h2>
            <div >
               <span>< input type="text"  placeholder="User Name"  class="fas fa-pencil-alt"/></span><i class="fas fa-pencil-alt"></i><br/><br/>
            </div>
            <div >
            <input type="email"   placeholder="Email" class="fas fa-pencil-alt"/>
            <i class="fas fa-at"></i><br/><br/>
            </div>
            <div>
                < input type="password"  placeholder="Password" class="fas fa-pencil-alt"/>
                <i class="fas fa-key"></i><br/><br/>
           </div>
            <div >
                <input type="password"  placeholder="New Password"class="fas fa-pencil-alt"/><i class="far fa-eye-slash"></i><br/><br/>
            </div>
            <div>
                < input type="password"  placeholder="Confirm Password" class="fas fa-pencil-alt"/><i class="far fa-eye-slash"></i><br/><br/>
            </div>
        </div >
      <br/>
      <button type="submit" className="btn btn-primary">
        SaveChanges
      </button>
    </div>
  );
}