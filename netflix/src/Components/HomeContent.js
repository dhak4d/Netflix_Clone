import React from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';
import { useState} from 'react';


export const HomeContent = () => {
  const [email, setEmail] = useState('')

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    localStorage.setItem('userEmail', e.target.value);
  };
  

  return (
    <div>
        <div className="bg-text">
          <h1 style={{ fontSize: "55px" }}>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
          <p>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='row1'>
            <input type='email' placeholder='Email Address' name={email} onChange={handleEmailChange}  required></input>
          
            <button type='submit' className='btn'><Link to='/NextStep' className='btn1'>Get Started</Link></button>
          </div>
        </div>
    </div>
  )
}
