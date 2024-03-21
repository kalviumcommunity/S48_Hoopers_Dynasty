import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate()
  const [field, setField] = useState({
    userName:"", 
    email:"",
    password:"" 
  });
  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: field.userName,
        email: field.email,
        password: field.password
      });

      if (response.status === 200) {
        setValidation(true);
        setSubmit(true);
        navigate("/home"); // Redirect to dashboard on successful login
      }
    } catch (error) {
      setError(error.response.data.message); // Assuming the server sends error message in a JSON object
    }
  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="center-container"> 
      <div className="form-container">
        <form className="register-form" onSubmit={(e)=>{e.preventDefault();
          if(field.userName && field.email && field.password)setValidation(true);
          setSubmit(true)}}>

          {submitted && validate?<div className="success-message">Registration successful!</div>:null}

          <input
            id="username" 
            className="form-field"
            type="text"
            placeholder="Username" 
            name="username" 
            value={field.userName} 
            onChange={(e)=>{setField({...field, userName:e.target.value})}} 
          />

          {submitted && !field.userName ?<span>Please enter your username</span>:null}
        
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

          <button className="form-field" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
