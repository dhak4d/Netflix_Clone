import React from 'react'
import './Home.css'
import netflix from 'D:/Mango Workspace/Netflix Clone/netflix/src/Images/netflix.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div>
        <div className='navbar'>
          <img src={netflix} alt='No logo' className='logo' />
          <Link to="/signin" className='navbar-btn'>
            Sign In
          </Link>
        </div>
      </div>
    </>
  )
}
