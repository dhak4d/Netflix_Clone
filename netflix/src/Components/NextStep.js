import React from 'react'
import { Link } from 'react-router-dom'
import './NextStep.css'

export const NextStep = () => {
  return (
    <>
    <div>
    <div className='flex'>
      <h1 className='nextStep-logo'>NETFLIX</h1>
      <Link to="/signin" className='nextStep'>Sign In</Link>
    </div>
     <hr style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}></hr>
     <div>
        <div className='section'>
            <p>STEP 1 OF 3</p>
            <h3>Finish setting up your account</h3>
            <p className='para'>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
            <button><Link to='/nextStep1' className='btn2'>NEXT</Link></button>
        </div>
     </div>
    </div>
  </>
  )
}
