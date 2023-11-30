import React from 'react';
import { Link } from 'react-router-dom';
import './NextStep1.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const NextStep1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if ((password).trim() === '') {
      setPasswordError('Please enter a password.');
      isValid = false;
    } else if ((password).trim().length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      axios.post('http://localhost:5000/addUser', {email, password})
        .then(res => {
          // if(status === "ok"){
            console.log(email, password)
          console.log('User data added Successfully:', res.data);
          alert('User Data Added Successfully')
          // }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      localStorage.clear()
      window.location.reload()
    }
  }

 return (
    <>
      <div className='flex'>
        <h1 className='nextStep-logo'>NETFLIX</h1>
        <Link to="/signup" className='nextStep'>Sign In</Link>
      </div>
      <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}></hr>
      <div className='flex1'>
        <p>STEP 2 OF 3 </p>
        <h1>Create a password to start your membership</h1>
        <p className='para1'>Just a few more steps and you're done We hate paperwork, too.</p>
        <form className='NextStep1Form' onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <div>{emailError}</div>}
          <input type='password' placeholder='Add a Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <div>{passwordError}</div>}
          <button className='btn3' >NEXT</button>
        </form>
      </div>
    </>
  )
}
