import React, { useState } from 'react';
import './signup.css';



function SignupPage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };


  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        password1: password1,
        password2: password2,
        email: email
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
        <input type="text" value={firstname} onChange={handleFirstnameChange} placeholder="First name"/>
        <br />
        
        <input type="text" value={lastname} onChange={handleLastnameChange} placeholder="Last name"/>
        <br />

        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email"/>
        <br />

        <input type="password" value={password1} onChange={handlePassword1Change} placeholder="Password"/>
        <br />

        <input type="password" value={password2} onChange={handlePassword2Change} placeholder="confirm password"/>
        <br />

        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default SignupPage;
