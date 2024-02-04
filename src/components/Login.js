import React, { useState, useEffect } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
  
function Login() {  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [users, setUsers] = useState([]);  
  const navigate = useNavigate();  
  
  useEffect(() => {  
    fetch('http://localhost:3001/users')  
      .then(response => response.json())  
      .then(data => setUsers(data))  
      .catch(error => console.error(error));  
  }, []);  
  
  const handleLogin = (event) => {  
    event.preventDefault();  
    const user = users.find(user => user.email === email && user.password === password);  
    if(user) {  
      alert('Login successful');  
      // Here you can handle a successful login (e.g. setting the user in your app state)  
      navigate("/");
    } else {  
      alert('Invalid email or password');  
    }  
  };  
  
  return (  
    <div className="body">  
      <div className="login">  
        <h1>Login</h1>  
        <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />  
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />  
        <div>  
          <Link to="/register"><p>New user? create an account</p></Link>  
          <button onClick={handleLogin}>Login</button>  
        </div>  
      </div>  
    </div>  
  );  
}  
  
export default Login;  
