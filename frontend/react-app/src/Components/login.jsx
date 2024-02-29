import React, { useState } from "react";
import "./login.css";

function Login() {

  const [field, setField] = useState({
    username:"", 
    email:"",
    password:"" 
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  return (
    <div className="center-container"> {/* Container to center the form */}
      <div className="form-container">
        <form className="register-form" onSubmit={(e)=>{e.preventDefault();
          if(field.username && field.email && field.password)setValidation(true);
          setSubmit(true)}}>

          {submitted && validate?<div className="success-message">Registration successful!</div>:null}

          <input
            id="username" 
            className="form-field"
            type="text"
            placeholder="Username" 
            name="username" 
            value={field.username} 
            onChange={(e)=>{setField({...field, username:e.target.value})}} 
          />

          {submitted && !field.username ?<span>Please enter your username</span>:null}
        
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={field.email}
            onChange={(e)=>{setField({...field, email:e.target.value})}}
          />

          {submitted && !field.email ?<span>Please enter your email</span>:null}

          <input
            id="password" 
            className="form-field"
            type="password" 
            placeholder="Password" 
            name="password" 
            value={field.password}
            onChange={(e)=>{setField({...field, password:e.target.value})}} 
          />

          {submitted && !field.password ?<span>Please enter your password</span>:null}

          <button className="form-field" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
