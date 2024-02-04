import React, { useState } from 'react';  
import { Link, useNavigate} from 'react-router-dom';  
  
function Register() {  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const navigate = useNavigate();  
  
  const handleRegister = (event) => {    
    event.preventDefault();    
    if(email === "" || password === "") {  
      alert('Email and password cannot be empty');  
      return;  
    }  
    if(password !== confirmPassword) {  
      alert('Passwords do not match');    
      return;  
    }  
    fetch('http://localhost:3001/users', {    
      method: 'POST',    
      headers: {    
        'Content-Type': 'application/json'    
      },    
      body: JSON.stringify({ email, password })    
    }).then(() => {    
      alert('Account created');    
      navigate("/login"); // Redirect to login page    
    }).catch((err) => {  
      alert('Error creating account');  
      console.log(err);  
    });    
  };    
  
  return (  
    <div className="body">  
      <div className="login">  
        <h1>Register</h1>  
        <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />  
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />  
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />  
        <div>  
          <Link to="/login"><p>Already have an account?</p></Link>  
          <button onClick={handleRegister}>Register</button>  
        </div>  
      </div>  
    </div>  
  );  
}  
  
export default Register;  
