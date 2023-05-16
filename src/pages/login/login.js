import React, { useState } from 'react';
import './login.css';




function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle success response from server
      console.log(data);
    })
    .catch(error => {
      // Handle error response from server
      console.log(error);
    });
  };

  return (
    <div className = "loginpage" >
    <form onSubmit={handleSubmit}>

        <h3> Login </h3>
        <div className = "formelements">
        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username"/>

      <br />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>

      <br />
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default LoginPage;
