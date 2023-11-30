import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import netflix from 'D:/Mango Workspace/Netflix Clone/netflix/src/Images/netflix.png'
import axios from 'axios'


export const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setState({ ...state, [name]: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    console.log('Axios request initiated');
    axios.post('http://localhost:5000/login', state)
    .then(res => {
      if (res.data.status === true) {
        console.log('Login successful',  res.data.message);
        alert('Login successful');
        setState({
          email:'',
          password:''
        })
      } else {
        console.log('Login failed: ' + res.data.message);
        alert('Login failed: ' + res.data.message);
      }
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        const { status, data } = error.response;
        if (status === 404 && data.message === 'Email not found') {
          // Handle 'Email not found' scenario
          alert('Email not found');
        } else if (status === 401 && data.message === 'Incorrect password') {
          // Handle 'Incorrect password' scenario
          alert('Incorrect password');
        } else {
          // Handle other server-side errors
          console.error('Server error:', data.message);
          alert('Server error: ' + data.message);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Network error:', error.request);
        alert('Network error: No response received');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Request error:', error.message);
        alert('Request error: ' + error.message);
      }
      // Handle other unforeseen errors here if necessary
      window.location.reload();
     });   
  }

  return (
    <div className='main'>
      <div className='navbar'>
        <img src={netflix} alt='No logo' className='logo' />
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-content'>
          <h1 style={{ marginTop: "50px", paddingTop: '20px', paddingBottom: '5px' }}>SignIn</h1>

          <div>
            <input type='text' className='form-input' placeholder='Email' name='email' value={state.email} onChange={handleChange} />
            {/* {emailError && <div>{emailError}</div>} */}
          </div>
          <div>
            <input type='password' className='form-input' placeholder='Password' name='password' value={state.password} onChange={handleChange} />
            {/* {passwordError && <div>{passwordError}</div>} */}
          </div>

          <div>
            <button type='submit' className='form-btn'>Sign In</button>
          </div>

          <div className='form-bottom'>
            <div>
              <input type='checkbox' value='lsRememberMe'></input>
              <label htmlFor='rememberMe' style={{ color: 'grey' }}>Remember me</label>
            </div>
            <div>
              <p style={{ color: 'grey' }}>Need help?</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '55px' }}>
            <p style={{ color: 'grey' }}>New To Netflix?</p><Link to='' style={{ color: 'white', marginLeft: '5px', textDecoration: 'none' }}><h4 style={{ color: 'white', marginLeft: '5px' }}>SignUp Now.</h4></Link>
          </div>

          <div className='last-div'>
            <p style={{ fontSize: '0.8rem', color: 'grey', marginRight: '10px' }}>This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <Link to='' style={{ fontSize: '0.9rem', color: 'blue', marginLeft: '5px', textDecoration: 'none' }}>Learn more</Link>.</p>
          </div>

        </div>
      </form>
    </div>
  )
}
