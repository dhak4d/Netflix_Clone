import React from 'react'
import './Home.css'
import { Navbar } from './Navbar'
import { HomeContent } from './HomeContent'


export const Home = () => {
  return (
    <>
      <div className='home-div'>
        <Navbar />
        <HomeContent />
      </div>
    </>
  )
}
